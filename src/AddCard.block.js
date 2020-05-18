// @refresh reset

import React, {memo, useState} from "react";
import PropTypes from "prop-types";
import StringMask from "string-mask";
import {PrimaryButton, SecondaryButton, Container, FormIcon, Error, Image, Input, Text} from "@yosmy/ui";

const AddCardBlock = memo(({
    ui,
    country,
    onAdd,
    onBack,
}) => {
    const [number, setNumber] = useState("");
    const [name, setName] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCvc] = useState("");
    const [zip, setZip] = useState("");

    const [execution, setExecution] = useState({
        error: null,
        progress: false
    });

    return <ui.layout
        progress={execution.progress}
    >
        <Input
            value={number}
            placeholder="Número de la tarjeta"
            start={<FormIcon data={ui.icons.objects.number} />}
            length={19}
            keyboard="number"
            onChange={(value) => {
                if (value.length >= 5 && value.length <= 9) {
                    // Clean before apply mask
                    value = value.replace(/ /g, "");
                    // Apply mask
                    value = StringMask.apply(value, "0000 0000");
                } else if (value.length >= 10 && value.length <= 14) {
                    // Clean before apply mask
                    value = value.replace(/ /g, "");
                    // Apply mask
                    value = StringMask.apply(value, "0000 0000 0000");
                } else if (value.length >= 15) {
                    // Clean before apply mask
                    value = value.replace(/ /g, "");
                    // Apply mask
                    value = StringMask.apply(value, "0000 0000 0000 0000");
                }

                setNumber(value);
            }}
        />
        <Input
            value={name}
            placeholder="Nombre y apellidos"
            start={<FormIcon data={ui.icons.objects.name} />}
            capitalize="words"
            margin={{
                top: 2
            }}
            onChange={(value) => {
                setName(value);
            }}
        />
        <Input
            value={expiry}
            start={<FormIcon data={ui.icons.objects.expiry} />}
            keyboard="number"
            placeholder="Expiración (MM/YY)"
            length={5}
            margin={{
                top: 2
            }}
            onChange={(value) => {
                // value = value.replace(/ |\//g, "");

                // PhoneReceiver wrote 2nd number?
                if (
                    expiry
                    && expiry.length === 1
                    && value.length === 2
                ) {
                    value = value + "/";
                }
                // PhoneReceiver deleted slash character?
                else if (
                    expiry
                    && expiry.length === 3
                    && value.length === 2
                ) {
                    // Just take 1st character
                    value = value.substr(0, 1);
                }
                // 3rd character is also a number. Did user write numbers too fast?
                else if (
                    value.length > 2
                    && value.substr(2, 1) !== "/"
                ) {
                    value = value.substr(0, 2) + "/" + value.substr(2, 2);
                }

                setExpiry(value);
            }}
        />
        <Container
            flow="row"
            align={{
                main: "flex-start",
                cross: "center"
            }}
            margin={{
                top: 2
            }}
        >
            <Input
                value={cvc}
                start={<FormIcon data={ui.icons.objects.cvc} />}
                keyboard="number"
                length={4} // American express cards have 4 digits
                placeholder="CVC (código de seguridad)"
                flex
                onChange={(value) => {
                    setCvc(value);
                }}
            />
            <Image
                source={require("./cvc.png")}
                width={50}
                height={50 * 131 / 196}
                margin={{
                    left: 2
                }}
            />
        </Container>
        {country === "US" && <Input
            margin={{
                top: 2
            }}
            value={zip}
            start={<FormIcon data={ui.icons.objects.zip} />}
            keyboard="number"
            placeholder="Código postal"
            onChange={(value) => {
                setZip(value);
            }}
        />}

        {execution.error && <Error
            margin={{
                top: 2
            }}
        >
            {execution.error}
        </Error>}

        <Container
            flow="row"
            align={{
                main: "center",
                cross: "center"
            }}
            margin={{
                top: 2
            }}
        >
            {onBack && <SecondaryButton
                onClick={onBack}
            >
                <Text>Regresar</Text>
            </SecondaryButton>}
            <PrimaryButton
                margin={{
                    left: onBack ? 2 : 0
                }}
                progress={execution.progress}
                disabled={execution.progress}
                onClick={() => {
                    if (!number) {
                        setExecution({
                            error: "El número no puede estar en blanco",
                            progress: false
                        });

                        return;
                    }

                    if (!name) {
                        setExecution({
                            error: "El nombre no puede estar en blanco",
                            progress: false
                        });

                        return;
                    }

                    if (!expiry) {
                        setExecution({
                            error: "La fecha de expiración no puede estar en blanco",
                            progress: false
                        });

                        return;
                    }

                    if (!cvc) {
                        setExecution({
                            error: "El código de seguridad no puede estar en blanco",
                            progress: false
                        });

                        return;
                    }

                    if (country === "US" && !zip) {
                        setExecution({
                            error: "El código postal no puede estar en blanco",
                            progress: false
                        });

                        return;
                    }

                    setExecution({
                        error: null,
                        progress: true
                    });

                    onAdd(
                        number.replace(/ /g, ""),
                        name,
                        expiry.replace(/[ /]/g, "").substr(0, 2), // expiry.replace(/ |\//g, "").substr(0, 2),
                        expiry.replace(/[ /]/g, "").substr(2, 2), // expiry.replace(/ |\//g, "").substr(2, 2),
                        cvc,
                        zip,
                        // onError
                        (message) => {
                            setExecution({
                                error: message,
                                progress: false
                            });
                        },
                    );
                }}
            >
                <Text>Continuar</Text>
            </PrimaryButton>
        </Container>
    </ui.layout>
}, () => {
    return true;
});

AddCardBlock.propTypes = {
    ui: PropTypes.shape({
        layout: PropTypes.func.isRequired,
        icons: PropTypes.shape({
            objects: PropTypes.shape({
                cvc: PropTypes.func.isRequired,
                expiry: PropTypes.func.isRequired,
                name: PropTypes.func.isRequired,
                number: PropTypes.func.isRequired,
                zip: PropTypes.func.isRequired,
            }).isRequired
        }).isRequired
    }).isRequired,
    country: PropTypes.string,
    onAdd: PropTypes.func.isRequired, // (number, name, month, year, cvc, zip, onError)
    onBack: PropTypes.func, // ()
};

export default AddCardBlock;