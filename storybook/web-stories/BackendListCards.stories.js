import React from 'react';
import {ThemeProvider} from "@yosmy/style";
import {EmptyLayout} from "@yosmy/ui";
import theme from "../Theme";

import BackendListCards from '../BackendListCards';

export default {
  title: 'BackendListCards',
  component: BackendListCards,
};

const Template = () => {
    return <ThemeProvider theme={theme}>
        <BackendListCards
            ui={{
                layout: EmptyLayout,
                card: EmptyLayout
            }}
            api={{
                collectCards: (user, onReturn) => {
                    onReturn([
                        {
                            id: "1",
                            user: "user-1",
                            last4: "1234",
                            fingerprint: "abcd"
                        },
                        {
                            id: "2",
                            user: "user-1",
                            last4: "5678",
                            fingerprint: "efgh"
                        },
                    ]);
                },
            }}
            user="user-1"
    />
    </ThemeProvider>
};

export const Default = Template.bind({});

