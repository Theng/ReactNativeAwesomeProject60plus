import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const PlayBackSpeedMenu = ({ closeMenu, setPlayBackSpeed, playBackSpeed }) => {
    const menuItem = (i, index) => {
        return (
            <TouchableOpacity
                onPress={() => {
                    setPlayBackSpeed(i);
                    closeMenu();
                }}
                key={"caption-" + index}
                style={{
                    padding: 16,
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <View style={{width:32}}>
                    {
                        playBackSpeed.value==i.value?<Icon name="check" size={16} color="gray" />:null
                    }
                </View>
                <Text style={{ color: "black", marginLeft: 10 }}>
                    {i.label}
                </Text>
            </TouchableOpacity>
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={closeMenu}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>
            <View style={{ backgroundColor: "white", padding: 16 }}>
                <Text style={{ color: "black", marginBottom: 16 }}>
                    Playback speed
                </Text>
                <ScrollView>
                    {
                        [
                            {label:"0.25x",value:0.25},
                            {label:"0.5x",value:0.5},
                            {label:"0.75x",value:0.75},
                            {label:"Normal",value:1},
                            {label:"1.25x",value:1.25},
                            {label:"1.5x",value:1.5},
                            {label:"1.75x",value:1.75},
                            {label:"2x",value:2},
                        ].map((i, index) => {
                              return menuItem(i, index);
                          })
                       }
                       <View style={{height:32}}/>
                </ScrollView>
            </View>
        </View>
    );
};

export default React.memo(PlayBackSpeedMenu);
