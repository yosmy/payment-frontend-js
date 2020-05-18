import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {EmptyLayout, LinePlaceholder, Text} from "@yosmy/ui";

const BackendListCards = ({
    ui, api, criteria
}) => {
    const [cards, setCards] = useState(null);

    const [execution, setExecution] = useState({
        progress: false
    });

    useEffect(() => {
        setExecution({
            progress: true
        });

        api.collectCards(
            null,
            criteria.user,
            // onReturn
            (cards) => {
                setCards(cards);

                setExecution({
                    progress: false
                });
            }
        );
    }, [api]);

    return <ui.layout
        progress={execution.progress}
    >
        {cards === null
            ? <EmptyLayout>
                <LinePlaceholder />
                <LinePlaceholder />
            </EmptyLayout>
            : cards.map((card) => {
                const {id, last4} = card;

                return <ui.card
                    key={id}
                    id={id}
                >
                    <Text

                    >
                        **** **** **** {last4}
                    </Text>
                </ui.card>
            })
        }
    </ui.layout>
};

BackendListCards.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        card: PropTypes.func.isRequired, // (id, children)
    }).isRequired,
    api: PropTypes.shape({
        collectCards: PropTypes.func.isRequired
    }).isRequired,
    criteria: PropTypes.shape({
        user: PropTypes.string
    }).isRequired,
};

export default BackendListCards;