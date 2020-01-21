import React, { Component } from "react";
import { View, Text } from "react-native";
import Header from "../../components/MainHeader"
import Hello from "../../components/Hello"
class HomeScreen extends Component {
    list = []
    number = 0
    constructor(props) {
        super(props);
        this.state = {
            number:0,
        };
    }

    componentDidMount() {
        
    }

    render() {
        console.log("Main render")
        return (
            <View style={{flex:1}} testID="home-screen">
                <Header/>
                <Text style={{textAlign:"center",fontSize:24,margin:16}}>React Hooks</Text>
                <Hello label="Hello"/>
            </View>
        );
    }
}

export default HomeScreen
