import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Icon, TertiaryButton} from "@yosmy/ui";
import {CardItem} from "./CardItem";

const ListCardsBlock = ({
    ui, api, onSelect, onEmpty, onDelete, onAdd
}) => {
    const [cards, setCards] = useState(null);

    const [selected, setSelected] = useState(null);

    const [execution, setExecution] = useState({
        progress: false
    });

    useEffect(() => {
        setExecution({
            progress: true
        });

        api.collectCards(
            // onReturn
            (cards) => {
                if (cards.length === 0) {
                    onEmpty();

                    return;
                }

                setCards(cards);

                setExecution({
                    progress: false
                });
            }
        );
    }, [api]);

    if (cards === null) {
        return <ui.layout
            progress={execution.progress}
        />
    }

    return <ui.layout
        progress={execution.progress}
    >
        {cards.map((card, i) => {
            const {id, last4} = card;

            return <CardItem
                key={id}
                ui={{
                    icons: {
                        states: {
                            selected: ui.icons.states.selected,
                            unselected: ui.icons.states.unselected,
                        }
                    }
                }}
                margin={{
                    top: i !== 0 ? 2 : undefined
                }}
                border={1}
                selected={selected && selected.id
                    ? card.id === selected.id
                    : false
                }
                title={`Cobrar de **** **** **** ${last4}`}
                end={<TertiaryButton
                    onClick={() => {
                        onDelete(card)
                    }}
                >
                    <Icon data={ui.icons.actions.delete} size={20}/>
                </TertiaryButton>}
                onSelect={() => {
                    setSelected(card);

                    onSelect(card);
                }}
            />;
        })}

        <CardItem
            ui={{
                icons: {
                    states: {
                        selected: ui.icons.states.selected,
                        unselected: ui.icons.states.unselected,
                    }
                }
            }}
            margin={{
                top: 2
            }}
            selected={selected === 'add'}
            title="Añadir tarjeta nueva"
            onSelect={() => {
                setSelected('add');

                onAdd();
            }}
        />
    </ui.layout>
};

ListCardsBlock.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        icons: PropTypes.shape({
            actions: PropTypes.shape({
                delete: PropTypes.func.isRequired,
            }).isRequired,
            states: PropTypes.shape({
                selected: PropTypes.func.isRequired,
                unselected: PropTypes.func.isRequired,
            }).isRequired
        }).isRequired
    }).isRequired,
    api: PropTypes.shape({
        collectCards: PropTypes.func.isRequired
    }).isRequired,
    onSelect: PropTypes.func.isRequired, // (card)
    onEmpty: PropTypes.func.isRequired, // ()
    onDelete: PropTypes.func.isRequired, // (card)
    onAdd: PropTypes.func.isRequired,
};

export default ListCardsBlock;