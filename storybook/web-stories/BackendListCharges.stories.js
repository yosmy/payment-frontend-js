import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {Container, EmptyLayout, Text} from "@yosmy/ui";
import theme from "../Theme";

import BackendListCharges from '../BackendListCharges';
import Money from "@yosmy/money";
import {distance as distanceDate, format as formatDate} from "@yosmy/date";

export default {
  title: 'BackendListCharges',
  component: BackendListCharges,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <BackendListCharges
            ui={{
                layout: EmptyLayout,
                item: ({id, amount, date}) => {
                    return <Container
                        key={id}
                        flow="row"
                    >
                        <Text>
                            {Money.format(amount)}
                        </Text>
                        <Text
                            margin={{
                                left: 2
                            }}
                        >
                            {distanceDate(date * 1000)} ({formatDate(date * 1000)})
                        </Text>
                    </Container>;
                }
            }}
            api={{
                collectCharges: (limit, skip, onReturn) => {
                    setTimeout(
                        () => {
                            switch (skip) {
                                case 0:
                                    onReturn([
                                        {
                                            id: 'id-1',
                                            card: 'card-1',
                                            amount: 1000,
                                            date: 1605918389
                                        },
                                        {
                                            id: 'id-2',
                                            card: 'card-2',
                                            amount: 2000,
                                            date: 1605918389
                                        }
                                    ]);

                                    break;
                                case 2:
                                    onReturn([
                                        {
                                            id: 'id-3',
                                            card: 'card-1',
                                            amount: 1000,
                                            date: 1605918389
                                        }
                                    ]);

                                    break;
                                default:
                                    onReturn([]);
                            }
                        },
                        3000
                    )
                },
            }}
            limit={2}
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

