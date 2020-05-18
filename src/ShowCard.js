// @refresh reset

import React, {memo} from "react";
import PropTypes from "prop-types";
import {CardProp} from "./Props";
import {CardItem} from "./CardItem";

const ShowCard = memo(({
    ui, card, onSelect
}) => {
    return <ui.layout>
        <CardItem
            ui={{
                icons: {
                    states: {
                        selected: ui.icons.states.selected,
                        unselected: ui.icons.states.unselected,
                    }
                }
            }}
            selected
            title={`**** **** **** ${card.last4}`}
            onSelect={onSelect
                ? () => {
                    onSelect();
                }
                : undefined
            }
        />
    </ui.layout>
}, () => {
    return true;
});

ShowCard.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        icons: PropTypes.shape({
            states: PropTypes.shape({
                selected: PropTypes.func.isRequired,
                unselected: PropTypes.func.isRequired,
            }).isRequired,
        }).isRequired
    }).isRequired,
    card: CardProp.isRequired,
    onSelect: PropTypes.func, // ()
};

export default ShowCard;