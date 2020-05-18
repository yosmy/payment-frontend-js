import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from '../theme';
import icons from '../icons';
import Layout from "./Layout";
import DeleteCard from "../src/DeleteCard.block";

storiesOf('DeleteCard', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <DeleteCard
                ui={{
                    layout: Layout,
                }}
                api={{
                    deleteCard: () => {}
                }}
                card={{
                    id: '1',
                    last4: '1234'
                }}
                onDelete={() => {}}
                onBack={() => {}}
            />
        </ThemeProvider>
    ))
;
