import React, { Component } from "react";
import { View, ScrollView, Keyboard, Button, Text } from "react-native";
import Header from "../../components/MainHeader";
import * as Yup from "yup";
import TextFormField from "../../components/FormFields/TextFormField";
import { Formik } from "formik";
const phoneRegExp = /^(0?)([1-9][0-9])(\d{3})(\d{3,4})$/;
const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    email: Yup.string()
        .email("Not an email.")
        .required("Required"),
    phone: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("Required")
});
class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View testID="about-screen" style={{ flex: 1 }}>
                <Header />
                <ScrollView>
                    <Text style={{textAlign:"center",fontSize:24,margin:16}}>Formik with Yup validation</Text>
                    <Formik
                        validationSchema={SignupSchema}
                        initialValues={{
                            firstName: "",
                            lastName: "",
                            email: "",
                            phone: ""
                        }}
                        onSubmit={values => {
                            console.log("form values: ", values);
                            Keyboard.dismiss();
                        }}
                    >
                        {props => (
                            <View>
                                <TextFormField
                                    {...props}
                                    label="First name"
                                    name="firstName"
                                />
                                <TextFormField
                                    {...props}
                                    label="Last name"
                                    name="lastName"
                                />
                                <TextFormField
                                    {...props}
                                    label="Email"
                                    name="email"
                                />
                                <TextFormField
                                    {...props}
                                    label="Phone"
                                    name="phone"
                                />
                                <Button
                                    onPress={props.handleSubmit}
                                    title="Submit"
                                />
                            </View>
                        )}
                    </Formik>
                </ScrollView>
            </View>
        );
    }
}

export default AboutScreen;
