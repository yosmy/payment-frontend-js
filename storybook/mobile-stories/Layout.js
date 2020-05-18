import React from "react";
import {Card} from "@yosmy/ui";

const Layout = ({progress, children}) => {
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
};

export default Layout;