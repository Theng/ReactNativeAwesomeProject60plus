import React, { Component } from "react";
import { View, Text  } from "react-native";
import Header from "../../components/MainHeader"
import LottieView from 'lottie-react-native';

class AboutScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() { 
        
    }

    render() {
        return (
            <View testID="about-screen" style={{flex:1}}>
                <Header/>
                <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
                    <LottieView style={{width:250,height:250}} source={require('../../assets/8252-looking-for-jobs.json')} autoPlay loop />
                </View>
            </View>
        );
    }
}

export default AboutScreen
