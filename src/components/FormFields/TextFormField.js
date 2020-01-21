import React from "react";
import { Input } from "react-native-elements";
const TextFormField = props => {
    const {
        label,
        name,
        handleChange, 
        handleBlur, 
        values, 
        errors, 
        touched,
        ...rest
      } = props;
    return (
        <Input
            containerStyle={{marginTop:16}}
            errorStyle={{ color: "red" }}
            onChangeText={handleChange(name)}
            value={values[name]}
            label={label}
            errorMessage={touched[name] && errors[name]}
            onBlur={handleBlur(name)}
            {...rest}
        />
    );
};

export default TextFormField;
