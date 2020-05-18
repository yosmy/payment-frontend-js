import React from "react";
import PropTypes from "prop-types";

const CardProp = PropTypes.shape({
    id: PropTypes.string.isRequired,
    last4: PropTypes.string.isRequired,
});

const AmountProp = PropTypes.number.isRequired;

export {
    CardProp,
    AmountProp
}