import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import icons from '../icons';
import {CardItem} from "../src/CardItem";

storiesOf('CardItem', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <CardItem
                ui={{
                    theme: theme,
                    icons: {
                        actions: {
                            delete: icons.actions.delete
                        },
                        states: {
                            selected: icons.states.selected,
                            unselected: icons.states.unselected
                        }
                    }
                }}
                title="**** **** **** 1234"
                onSelect={() => {
                    console.log('onSelect');
                }}
                onDelete={() => {
                    console.log('onDelete');
                }}
            />
        </ThemeProvider>
    ))
;
