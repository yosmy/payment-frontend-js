import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import {resolve} from "@yosmy/resolution";
import {Image} from "@yosmy/ui";
import ListCardsBlock from "./ListCards.block";
import AddCardBlock from "./AddCard.block";
import DeleteCardBlock from "./DeleteCard.block";

const ManageCards = memo(({
    api, ui, onSelect
}) => {
    const [url, setUrl] = useState({
        location: 'list-cards', // list-cards, add-card, delete-card
        payload: {}
    });

    return resolve(
        url.location,
        [
            {
                location: /^list-cards/,
                element: () => {
                    return <ListCardsBlock
                        ui={{
                            layout: ui.layout,
                            icons: {
                                actions: {
                                    delete: ui.icons.actions.delete,
                                },
                                states: {
                                    selected: ui.icons.states.selected,
                                    unselected: ui.icons.states.unselected,
                                }
                            }
                        }}
                        api={{
                            collectCards: api.collectCards
                        }}
                        onSelect={(card) => {
                            onSelect(card);
                        }}
                        onEmpty={() => {
                            setUrl({
                                location: "add-card",
                                payload: {
                                    back: false
                                }
                            });
                        }}
                        onDelete={(card) => {
                            setUrl({
                                location: "delete-card",
                                payload: {
                                    card: card
                                }
                            });
                        }}
                        onAdd={() => {
                            setUrl({
                                location: "add-card",
                                payload: {
                                    back: true
                                }
                            });
                        }}
                    />
                },
                default: true
            },
            {
                location: /^add-card/,
                element: () => {
                    return <AddCardBlock
                        ui={{
                            layout: ({children, ...props}) => {
                                return <ui.layout {...props}>
                                    {children}
                                    <Image
                                        source={require("./secure.png")}
                                        margin={{
                                            top: 2
                                        }}
                                        width={200}
                                        height={200 * 150 / 668}
                                        center
                                    />
                                </ui.layout>
                            },
                            icons: {
                                objects: {
                                    cvc: ui.icons.objects.cvc,
                                    expiry: ui.icons.objects.expiry,
                                    name: ui.icons.objects.name,
                                    number: ui.icons.objects.number,
                                    zip: ui.icons.objects.zip,
                                }
                            }
                        }}
                        onAdd={(number, name, month, year, cvc, zip, onError) => {
                            api.addCard(
                                number,
                                name,
                                month,
                                year,
                                cvc,
                                zip,
                                // onReturn
                                (card) => {
                                    setUrl({
                                        location: "list-cards",
                                        payload: {}
                                    });

                                    onSelect(card);
                                },
                                // onPaymentException
                                ({message}) => {
                                    onError(message);
                                }
                            );
                        }}
                        onBack={url.payload.back
                            ? () => {
                                setUrl({
                                    location: "list-cards",
                                    payload: {}
                                });
                            }
                            : null
                        }
                    />
                },
            },
            {
                location: /^delete-card/,
                element: () => {
                    return <DeleteCardBlock
                        ui={{
                            layout: ui.layout
                        }}
                        api={{
                            deleteCard: api.deleteCard
                        }}
                        card={url.payload.card}
                        onDelete={() => {
                            setUrl({
                                location: "list-cards",
                                payload: {}
                            });
                        }}
                        onBack={() => {
                            setUrl({
                                location: "list-cards",
                                payload: {}
                            });
                        }}
                    />
                }
            }
        ]
    );
}, () => {
    return true;
});

ManageCards.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        icons: PropTypes.shape({
            actions: PropTypes.shape({
                delete: PropTypes.func.isRequired,
            }).isRequired,
            objects: PropTypes.shape({
                bank: PropTypes.func.isRequired,
                cvc: PropTypes.func.isRequired,
                expiry: PropTypes.func.isRequired,
                lock: PropTypes.func.isRequired,
                name: PropTypes.func.isRequired,
                number: PropTypes.func.isRequired,
                zip: PropTypes.func.isRequired,
            }).isRequired,
            states: PropTypes.shape({
                selected: PropTypes.func.isRequired,
                unselected: PropTypes.func.isRequired,
            }).isRequired
        }).isRequired
    }).isRequired,
    api: PropTypes.shape({
        addCard: PropTypes.func.isRequired,
        collectCards: PropTypes.func.isRequired,
        deleteCard: PropTypes.func.isRequired,
    }).isRequired,
    onSelect: PropTypes.func.isRequired, // (id)
};

export default ManageCards;