import React from "react";
import { Text } from "react-native";
import { useSelector } from 'react-redux';

function MyComponent() {
    const hello = useSelector(state => state.hello);
    return (
        <Text testID="hello-redux" style={{color:"red"}}>{hello.data}</Text>
    );
}

export default React.memo(MyComponent);
