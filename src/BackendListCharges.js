import React from "react";
import PropTypes from "prop-types";
import {Container, LinePlaceholder, LoaderList, PrimaryButton, Text} from "@yosmy/ui";

const BackendListCharges = ({
    ui, api, limit
}) => {
    return <LoaderList
        ui={{
            layout: ui.layout,
            empty: () => {
                return <Text>No hay pagos aún</Text>;
            },
            loading: () => {
                return <Container
                    margin={{
                        top: 2
                    }}
                >
                    <LinePlaceholder />
                    <LinePlaceholder />
                    <LinePlaceholder />
                </Container>
            },
            more: ({onClick}) => {
                return <Container
                    flow="row"
                    align={{
                        main: "center"
                    }}
                >
                    <PrimaryButton
                        margin={{
                            top: 2
                        }}
                        onClick={onClick}
                    >
                        <Text>Mostrar más</Text>
                    </PrimaryButton>
                </Container>
            },
            item: (props) => {
                return <ui.item
                    {...props}
                />
            }
        }}
        limit={limit}
        onCollect={(limit, skip) => {
            return new Promise((resolve) => {
                api.collectCharges(
                    limit,
                    skip,
                    // onReturn
                    (charges) => {
                        resolve({
                            items: charges,
                        });
                    },
                )
            });
        }}
    />
};

BackendListCharges.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        item: PropTypes.func.isRequired
    }).isRequired,
    api: PropTypes.shape({
        collectCharges: PropTypes.func.isRequired
    }).isRequired,
    limit: PropTypes.number.isRequired,
};

export default BackendListCharges;