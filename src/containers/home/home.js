import React, { Component } from "react";
import { View, Text  } from "react-native";
import Header from "../../components/MainHeader"
import LottieView from 'lottie-react-native';

class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <View style={{flex:1}} testID="home-screen">
                <Header/>
                <Text>Home</Text>
                <LottieView style={{width:250,height:250}} source={require('../../assets/8252-looking-for-jobs.json')} autoPlay loop />
            </View>
        );
    }
}

export default HomeScreen
