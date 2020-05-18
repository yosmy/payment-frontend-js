import React from "react";
import PropTypes from "prop-types";

const CardProp = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        last4: PropTypes.string.isRequired
    })
]);

const ChargeProp = PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
        amount: PropTypes.number.isRequired
    })
]);

const FingerprintProp = PropTypes.string;

const enrichCards = async (items, filter, pick, collect, enrich) => {
    if (items.length === 0) {
        return items;
    }

    let cards = items
        .filter(filter)
        .map(pick);

    cards = await collect(cards);

    items = items.map((item) => {
        if (!filter(item)) {
            return item;
        }

        const card = cards.find((card) => {
            return card.id === pick(item);
        });

        return enrich(
            item,
            {
                id: card.id,
                last4: card.last4,
            }
        );
    })

    return items;
};

const enrichCharges = async (items, filter, pick, collect, enrich) => {
    if (items.length === 0) {
        return items;
    }

    let charges = items
        .filter(filter)
        .map(pick);

    charges = await collect(charges);

    items = items.map((item) => {
        if (!filter(item)) {
            return item;
        }

        const charge = charges.find((charge) => {
            return charge.id === pick(item);
        });

        return enrich(
            item,
            {
                id: charge.id,
                amount: charge.amount,
            }
        );
    })

    return items;
};

export default {
    ChargeProp,
    CardProp,
    FingerprintProp,
    enrichCards,
    enrichCharges,
};