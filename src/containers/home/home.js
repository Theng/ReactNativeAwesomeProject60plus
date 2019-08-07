import React, { Component } from "react";
import { View, Text  } from "react-native";
import Header from "../../components/MainHeader"

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { 
        
    }

    render() {
        return (
            <View style={{flex:1}}>
                <Header/>
                <Text>Home</Text>
            </View>
        );
    }
}

export default HomeScreen
