import React from "react";
import { Button } from "react-native";
function MyComponent({increment,label}) {
    console.log("Render increase button Compoenent.");
    return (
        <Button
            title={label}
            onPress={()=>increment(5)}
        />
    );
}

export default React.memo(MyComponent);
