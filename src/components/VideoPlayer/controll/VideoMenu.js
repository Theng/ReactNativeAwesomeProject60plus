import React from "react";
import {
    View,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

const VideoMenu = ({closeMenu, openCaptionMenu, openPlayBackSpeedMenu, playBackSpeed, openAudioTrackMenu}) => {
    
    const menuItem = ({id,label, icon, press}) =>{
        return(
            <TouchableOpacity key={"menuItem"+id} onPress={press} style={{padding:16, flexDirection:"row",alignItems:"center"}}>
                <Icon name={icon} size={24} color="black" />
                <Text style={{color:"black", marginLeft:16}}>
                {label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={closeMenu}>
                <View style={{ flex: 1 }}>

                </View>
            </TouchableWithoutFeedback>
            <View style={{ backgroundColor:"white" }}>
                {/* <ScrollView> */}
                    {menuItem({id:1,label:"Audio Tracks",icon:"audio-description", press:openAudioTrackMenu})}
                    {menuItem({id:2,label:"Captions",icon:"closed-captioning", press:openCaptionMenu})}
                    {menuItem({id:3,label:"Playback speed - "+playBackSpeed.label,icon:"clock", press:openPlayBackSpeedMenu})}
                {/* </ScrollView> */}
            </View>
        </View>
    );
};

export default React.memo(VideoMenu);
