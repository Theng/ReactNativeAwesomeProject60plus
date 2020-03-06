import React, { Component } from "react";
import { View, TouchableHighlight } from "react-native";
import VideoPlayer from "../../components/VideoPlayer"
import Icon from 'react-native-vector-icons/Ionicons';
import c from "../../constant"
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

    close = () =>{
        this.props.navigation.goBack()
    }

    render() {
        console.log("Main render")
        return (
            <View style={{flex:1}}>
                <View style={{flex:1}}>
                    <VideoPlayer close={this.close} uri='https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8'/>
                </View>
            </View>
        );
    }
}

export default HomeScreen
