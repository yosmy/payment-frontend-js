import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from '../theme';
import icons from '../icons';
import Layout from "./Layout";
import ShowCard from "../src/ShowCard";

storiesOf('ShowCard', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <ShowCard
                ui={{
                    layout: Layout,
                    icons: {
                        states: {
                            unselected: icons.states.unselected,
                            selected: icons.states.selected,
                        },
                    }
                }}
                card={{
                    id: '1',
                    last4: '1234'
                }}
                onSelect={() => {}}
            />
        </ThemeProvider>
    ))
;
