import React, { Component } from "react";
import { View, Text  } from "react-native";
import Header from "../../components/MainHeader"
import FastImage from 'react-native-fast-image'

class AboutScreen extends Component {
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
                <Text>About</Text>
                <FastImage
                    style={{ width: 200, height: 200 }}
                    source={{
                        uri: 'https://unsplash.it/400/400?image=1',
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                />
            </View>
        );
    }
}

export default AboutScreen
