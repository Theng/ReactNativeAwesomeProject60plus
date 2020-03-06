import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    ActivityIndicator,
    Dimensions,
    Platform
} from "react-native";
import { Slider } from "react-native-elements";
import _ from "lodash";
import Icon from "react-native-vector-icons/FontAwesome5";
const hitSlop = { top: 16, bottom: 16, left: 16, right: 16 }
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX =
    platform === "ios" &&
    (deviceHeight === 812 ||
        deviceWidth === 812 ||
        deviceHeight === 896 ||
        deviceWidth === 896);

const seekerColor = {
    bar: "rgba(255,255,255,.2)",
    loaded: "#bdc3c7",
    button: "#e74c3c"
};

const VideoControll = ({
    close,
    showHideControll,
    videoProgress,
    videoDuration,
    pause,
    playPauseVideo,
    toggleFullScreen,
    toggleMute,
    muted,
	seekVideo,
	openMenu
}) => {
    const [showTimeRemaining, setShowTimeRemaining] = useState("");
    useEffect(() => calculateTime, [videoProgress]);

    const calculateTime = () => {
        const time = videoProgress.currentTime;
        setShowTimeRemaining(`${formatTime(time)}`);
    };

    const formatTime = (time = 0) => {
        time = Math.min(Math.max(time, 0), videoDuration);
        const formattedMinutes = _.padStart(
            Math.floor(time / 60).toFixed(0),
            2,
            0
        );
        const formattedSeconds = _.padStart(
            Math.floor(time % 60).toFixed(0),
            2,
            0
        );
        return `${formattedMinutes}:${formattedSeconds}`;
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    marginTop: isIphoneX ? 32 : platform == "ios" ? 22 : 16,
					marginLeft: 10,
					marginRight:10,
					justifyContent:"space-between",
					flexDirection:"row",
					height:62,
					zIndex:999
                }}
            >
                <TouchableOpacity
                    style={{
                        width: 48,
                        height: 48,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
					onPress={close}
					hitSlop={hitSlop}
                >
                    <Icon name="arrow-circle-left" size={20} color="white" />
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={!pause ? showHideControll : null}
                >
                    <View style={{flex:1, marginLeft:16, marginRight:16}}/>
                </TouchableWithoutFeedback>
				<TouchableOpacity
                    style={{
                        width: 48,
                        height: 48,
                        justifyContent: "center",
                        alignItems: "center"
                    }}
					onPress={openMenu}
					hitSlop={hitSlop}
                >
                    <Icon name="ellipsis-v" size={20} color="white" />
                </TouchableOpacity>
            </View>
            <TouchableWithoutFeedback
                onPress={!pause ? showHideControll : null}
            >
                <View style={styles.topContainer}>
                    {videoProgress.playableDuration <= 0 &&
                    videoProgress.currentTime <
                        videoProgress.seekableDuration ? (
                        <ActivityIndicator
                            size="large"
                            color="white"
                        />
                    ) : videoProgress.currentTime >=
                      videoProgress.seekableDuration ? (
                        <TouchableOpacity
                            onPress={() => {
                                seekVideo(0);
                                pause ? playPauseVideo() : null;
                            }}
                            style={styles.playPauseButton}
                        >
                            <Icon name="undo" size={48} color="white" light />
                        </TouchableOpacity>
                    ) : (
                        <TouchableOpacity
                            onPress={playPauseVideo}
                            style={styles.playPauseButton}
                        >
                            <Icon
                                name={pause ? "play-circle" : "pause-circle"}
                                size={48}
                                color="white"
                                light
                            />
                        </TouchableOpacity>
                    )}
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.bottomContainer}>
                <View style={styles.itemBottomContainer}>
                    <TouchableOpacity onPress={toggleMute} hitSlop={hitSlop}>
                        <Icon
                            name={muted ? "volume-mute" : "volume-up"}
                            size={20}
                            color="white"
                            light
                        />
                    </TouchableOpacity>
                    <Text style={styles.time}>{showTimeRemaining}</Text>
                </View>
                <View style={{ flex: 1, height: 20 }}>
                    <View
                        style={{
                            width: "100%",
                            height: 2,
                            backgroundColor: seekerColor.bar,
                            marginTop: 9
                        }}
                    >
                        <View
                            style={{
                                width: "100%",
                                height: 2,
                                backgroundColor: seekerColor.loaded
                            }}
                        />
                    </View>
                    <Slider
                        value={videoProgress.currentTime}
                        onValueChange={seekVideo}
                        minimumValue={0}
                        maximumValue={
                            videoDuration ? parseInt(videoDuration) : 0
                        }
                        style={{
                            width: "100%",
                            position: "absolute",
                            top: -10
                        }}
                        maximumTrackTintColor={seekerColor.bar}
                        minimumTrackTintColor="#e74c3c"
                        thumbTouchSize={{ width: 20, height: 20 }}
                        thumbStyle={{
                            borderRadius: 8,
                            width: 16,
                            height: 16,
                            backgroundColor: seekerColor.button
                        }}
                        trackStyle={{ height: 2 }}
                    />
                </View>
                <View style={styles.itemBottomContainer}>
                    <Text style={styles.time}>
                        {formatTime(parseInt(videoDuration))}
                    </Text>
                    <TouchableOpacity 
                    // onPress={toggleFullScreen} 
                    onPress={()=>alert("disabled")} 
                    hitSlop={hitSlop}>
                        <Icon name="expand" size={20} color="white" light />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default React.memo(VideoControll);

const styles = {
    playPauseButton: {
        padding: 8
    },
    topContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        // paddingTop: 32
        paddingBottom:4,
        marginBottom:8
    },
    bottomContainer: {
        flexDirection: "row",
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 32
    },
    itemBottomContainer: {
        width: 100,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 10
    },
    time: {
        color: "white"
    }
};
