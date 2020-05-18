import {getStorybookUI, configure} from "@storybook/react-native";

import "../rn-addons";

configure(() => {
    require("./AddCard.block");
    require("./CardItem");
    require("./DeleteCard.block");
    require("./ListCards.block");
    require("./ManageCards");
    require("./ShowCard");
}, module);

const StorybookUIRoot = getStorybookUI({
    asyncStorage: null
});

export default StorybookUIRoot;