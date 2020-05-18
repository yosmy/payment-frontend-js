// @refresh reset

import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import {SecondaryButton, DangerButton, Container, Text} from "@yosmy/ui";
import {CardProp} from "./Props";

const DeleteCardBlock = memo(({
    ui, api, card, onDelete, onBack
}) => {
    const [execution, setExecution] = useState({
        progress: false
    });

    return <ui.layout
        progress={execution.progress}
    >
        <Text center>¿Seguro que quieres borrar la tarjeta **** **** **** {card.last4}?</Text>
        <Container
            flow="row"
            align={{
                main: "center",
                cross: "center"
            }}
            margin={{
                top: 2
            }}
        >
            <SecondaryButton
                disabled={execution.progress}
                onClick={onBack}
            >
                <Text>Regresar</Text>
            </SecondaryButton>

            <DangerButton
                disabled={execution.progress}
                progress={execution.progress}
                margin={{
                    left: 2
                }}
                onClick={() => {
                    setExecution({
                        progress: true
                    });

                    api.deleteCard(
                        card.id,
                        // onReturn
                        () => {
                            onDelete();
                        }
                    );
                }}
            >
                <Text>Sí, borrarla</Text>
            </DangerButton>
        </Container>
    </ui.layout>
}, () => {
    return true;
});

DeleteCardBlock.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
    }).isRequired,
    api: PropTypes.shape({
        deleteCard: PropTypes.func.isRequired
    }).isRequired,
    card: CardProp.isRequired,
    onDelete: PropTypes.func.isRequired, // ()
    onBack: PropTypes.func.isRequired // ()
};

export default DeleteCardBlock;