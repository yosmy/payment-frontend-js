import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import theme from '../theme';
import icons from '../icons';
import Layout from "./Layout";
import AddCard from "../src/AddCard.block";

storiesOf('AddCard', module)
    .add('default', () => (
        <ThemeProvider theme={theme}>
            <AddCard
                ui={{
                    layout: Layout,
                    icons: {
                        actions: {
                            back: icons.actions.back,
                            continue: icons.actions.continue,
                        },
                        objects: {
                            cvc: icons.objects.password,
                            expiry: icons.objects.date,
                            name: icons.objects.person,
                            number: icons.objects.card,
                            zip: icons.objects.zip,
                        }
                    }
                }}
                api={{
                    addCard: () => {}
                }}
                onAdd={() => {}}
                onBack={() => {}}
            />
        </ThemeProvider>
    ))
    .add('without onBack', () => (
        <ThemeProvider theme={theme}>
            <AddCard
                ui={{
                    layout: Layout,
                    icons: {
                        actions: {
                            back: icons.actions.back,
                            continue: icons.actions.continue,
                        },
                        objects: {
                            cvc: icons.objects.password,
                            expiry: icons.objects.date,
                            name: icons.objects.person,
                            number: icons.objects.card,
                            zip: icons.objects.zip,
                        }
                    }
                }}
                api={{
                    addCard: () => {}
                }}
                onAdd={() => {}}
            />
        </ThemeProvider>
    ))
;
