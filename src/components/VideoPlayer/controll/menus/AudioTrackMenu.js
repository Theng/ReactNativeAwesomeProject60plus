import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const AudioTrackMenu = ({ closeMenu, videoData, setAudioTrack, audioTrack }) => {
    const menuItem = (i, index) => {
        return (
            i.title?<TouchableOpacity
                onPress={() => {
                    setAudioTrack({
                        type: "title",
                        value: i.title
                    });
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
                    {audioTrack?.value==i.title?<Icon name="check" size={16} color="gray" />:null}
                </View>
                <Text style={{ color: "black", marginLeft: 16 }}>
                    {capitalizeFirstLetter(i.title).replace(":", " - ")}
                </Text>
            </TouchableOpacity>:null
        );
    };

    const  capitalizeFirstLetter=(string)=> {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={closeMenu}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>
            <View style={{ backgroundColor: "white", padding: 16 }}>
                <Text style={{ color: "black", marginBottom: 16 }}>
                    Audio track
                </Text>
                <ScrollView>
                    
                    {videoData?.audioTracks?.length > 0
                        ? videoData?.audioTracks.map((i, index) => {
                              return menuItem(i, index);
                          })
                        : null}
                    <View key="space-001" style={{height:32}}/>
                </ScrollView>
            </View>
        </View>
    );
};

export default React.memo(AudioTrackMenu);
