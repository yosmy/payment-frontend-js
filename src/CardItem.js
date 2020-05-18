// @refresh reset

import React, {memo, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Container, Icon, LinePlaceholder, ListItem} from "@yosmy/ui";

const CardItem = memo(({
    ui, margin, selected: initialSelected, title, end, onSelect
}) => {
    const [selected, setSelected] = useState(null);

    useEffect(() => {
        setSelected(initialSelected);
    }, [initialSelected]);

    return <ListItem
        margin={margin}
        start={selected
            ? <Icon data={ui.icons.states.selected} size={30} />
            : <Icon data={ui.icons.states.unselected} size={30} />
        }
        title={title}
        end={end}
        onClick={() => {
            setSelected(true);

            onSelect();
        }}
    />
}, (prev, next) => {
    return prev.selected === next.selected;
});

CardItem.propTypes = {
    ui: PropTypes.shape({
        icons: PropTypes.shape({
            states: PropTypes.shape({
                selected: PropTypes.func.isRequired,
                unselected: PropTypes.func.isRequired,
            })
        }).isRequired
    }).isRequired,
    selected: PropTypes.bool,
    title: PropTypes.string.isRequired,
    end: PropTypes.object,
    onSelect: PropTypes.func.isRequired, // ()
};

CardItem.defaultProps = {
    selected: false
};

const CardPlaceholder = memo(() => {
    return <Container>
        <LinePlaceholder />
        <LinePlaceholder />
        <LinePlaceholder />
    </Container>
});

CardPlaceholder.propTypes = {};

export {CardItem, CardPlaceholder};