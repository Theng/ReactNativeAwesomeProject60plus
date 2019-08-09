import React, { Component } from "react";
import { View, FlatList  } from "react-native";
import Header from "../../components/MainHeader"
import FastImage from 'react-native-fast-image'
import c from "../../constant"
class HomeScreen extends Component {
    list = []
    constructor(props) {
        super(props);
        this.state = {};
        for (let index = 0; index < 200; index++) {
            this.list.push(index)
        }
    }

    componentDidMount() {
        
    }

    render() {
        return (
            <View style={{flex:1}} testID="home-screen">
                <Header/>
                <FlatList
                    style={{margin:4}}
                    data={this.list}
                    numColumns={2}
                    keyExtractor={item=> item.toString()}
                    renderItem={({item}) => <FastImage
                        key={item}
                        style={{ width: (c.deviceWidth*.5)-12, height: (c.deviceWidth*.5)-12,margin:4 , backgroundColor:"#bdc3c7"}}
                        source={{
                            uri: 'https://unsplash.it/400/400?image='+item,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />}
                />
            </View>
        );
    }
}

export default HomeScreen
