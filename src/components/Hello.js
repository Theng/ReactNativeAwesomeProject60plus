import React, { useState, useCallback, useMemo } from "react";
import { View, Text } from "react-native";
import INC from "./INC";
function MyComponent({ label }) {
    console.log("Render Hello Compoenent.");

    const [number, increase] = useState(0);
    const [a, setAA] = useState(1);
    const [b, setB] = useState(1);

    const increment = useCallback(
        x => {
            increase(n => n + x);
        },
        [increase]
    );

    const incrementA = useCallback(
        x => {
            setAA(n => n + x);
        },
        [setAA]
    );
    const incrementB = useCallback(
        x => {
            setB(n => n + x);
        },
        [setB]
    );

    const mySum = useMemo(() => sum(a, b), [a, b]);

    return (
        <View>
            <Text>useCallback: {label + ": " + number}</Text>
            <INC label="Increase Hello" increment={increment} />
            <Text>useMemo: sum (a+b): {mySum}</Text>
            <INC label="Increase A" increment={incrementA} />
            <INC label="Increase B" increment={incrementB} />
        </View>
    );
}

export default React.memo(MyComponent);

const sum = (a, b) => {
    console.log("computing SUM:::");
    return a + b;
};
