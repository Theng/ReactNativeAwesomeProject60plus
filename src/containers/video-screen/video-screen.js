import React, { Component } from "react";
import { View, StatusBar } from "react-native";
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
        StatusBar.setHidden(true);
    }

    componentWillUnmount() {
        StatusBar.setHidden(false);
    }

    close = () =>{
        this.props.navigation.goBack()
    }

    render() {
        console.log("Main render")
        // http://sample.vodobox.com/planete_interdite/planete_interdite_alternate.m3u8
        // https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8
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
