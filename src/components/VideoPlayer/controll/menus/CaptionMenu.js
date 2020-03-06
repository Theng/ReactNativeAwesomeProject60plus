import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const VideoMenu = ({ closeMenu, videoData, setSubtitle, subtitle }) => {
    const menuItem = (i, index) => {
        return (
            i.title && i.language?<TouchableOpacity
                onPress={() => {
                    setSubtitle({
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
                    {subtitle?.value==i.title?<Icon name="check" size={16} color="gray" />:null}
                </View>
                <Text style={{ color: "black", marginLeft: 16 }}>
                    {i.title.replace("subs:", "")}
                </Text>
            </TouchableOpacity>:null
        );
    };

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={closeMenu}>
                <View style={{ flex: 1 }}></View>
            </TouchableWithoutFeedback>
            <View style={{ backgroundColor: "white", padding: 16 }}>
                <Text style={{ color: "black", marginBottom: 16 }}>
                    Captions
                </Text>
                <ScrollView>
                    <TouchableOpacity
                        onPress={() => {
                            setSubtitle(null);
                            closeMenu();
                        }}
                        style={{
                            padding: 16,
                            flexDirection: "row",
                            alignItems: "center"
                        }}
                    >
                        <View style={{width:32}}>
                            {!subtitle?<Icon name="check" size={16} color="gray" />:null}
                        </View>
                        <Text style={{ color: "black", marginLeft: 16 }}>
                            Turn off captions
                        </Text>
                    </TouchableOpacity>
                    {videoData?.textTracks?.length > 0
                        ? videoData?.textTracks.map((i, index) => {
                              return menuItem(i, index);
                          })
                        : null}
                    <View style={{height:32}}/>
                </ScrollView>
            </View>
        </View>
    );
};

export default React.memo(VideoMenu);
