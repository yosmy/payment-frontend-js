import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from '../theme';
import icons from '../icons';
import Layout from "./Layout";
import ListCards from "../src/ListCards.block";

storiesOf('ListCards', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <ListCards
                ui={{
                    layout: Layout,
                    icons: {
                        actions: {
                            delete: icons.actions.delete,
                        },
                        states: {
                            selected: icons.states.selected,
                            unselected: icons.states.unselected,
                        }
                    }
                }}
                api={{
                    collectCards: (onReturn) => {
                        onReturn([
                            {id: '1', last4: '1234'},
                            {id: '2', last4: '5678'},
                        ]);
                    },
                }}
                onSelect={() => {}}
                onEmpty={() => {}}
                onDelete={() => {}}
                onAdd={() => {}}
            />
        </ThemeProvider>
    ))
;
