import React from 'react';
import {storiesOf} from '@storybook/react-native';
import {ThemeProvider} from "@yosmy/style";
import {Card} from "@yosmy/ui";
import theme from '../theme';
import icons from '../icons';
import Layout from "./Layout";
import ManageCards from "../src/ManageCards";

const props = {
    ui: {
        layout: ({progress, children}) => {
            return <Card
                align={{
                    main: "flex-start",
                    cross: "center"
                }}
                margin={1}
                padding={{
                    top: 2,
                    bottom: 2,
                    left: 2,
                    right: 2
                }}
                progress={progress}
                title="Método de pago"
            >
                {children}
            </Card>
        },
        icons: {
            actions: {
                delete: icons.actions.delete,
            },
            objects: {
                bank: icons.objects.bank,
                cvc: icons.objects.password,
                expiry: icons.objects.date,
                lock: icons.objects.lock,
                name: icons.objects.person,
                number: icons.objects.card,
                zip: icons.objects.zip,
            },
            states: {
                selected: icons.states.selected,
                unselected: icons.states.unselected,
            }
        }
    },
    api: {
        addCard: (
            number,
            name,
            month,
            year,
            cvc,
            zip,
            onReturn,
            onPaymentException
        ) => {
            setTimeout(
                () => {
                    onReturn();
                },
                3000
            );
        },
        collectCards: (onReturn) => {
            onReturn([
                {id: '1', last4: '1234'},
                {id: '2', last4: '5678'},
            ]);
        },
        deleteCard: () => {},
    },
    onSelect: () => {}
};

storiesOf('ManageCards', module)
    .add('with no cards', () => (
        <ThemeProvider theme={theme}>
            <ManageCards
                {...props}
                api={{
                    ...props.api,
                    collectCards: (onReturn) => {
                        setTimeout(
                            () => {
                                onReturn([]);
                            },
                            3000
                        )
                    },
                }}
            />
        </ThemeProvider>
    ))
    .add('with cards', () => (
        <ThemeProvider theme={theme}>
            <ManageCards
                {...props}
            />
        </ThemeProvider>
    ))
;
