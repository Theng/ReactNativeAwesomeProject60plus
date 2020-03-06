import React, {useState, useCallback, useRef} from 'react';
import {View, ActivityIndicator, TouchableWithoutFeedback} from 'react-native';
import Video from 'react-native-video';
import VideoControll from './controll/VideoControll';
import VideoMenu from "./controll/VideoMenu"
import CaptionMenu from "./controll/menus/CaptionMenu"
import AudioTrackMenu from "./controll/menus/AudioTrackMenu"
import PlayBackSpeedMenu from "./controll/menus/PlayBackSpeedMenu"

const VideoPlayer = ({uri, close}) => {
  const [videoLoading, setVideoLoading] = useState(true);
  const [showControll, setShowControll] = useState(true);
  const [pause, setPause] = useState(false);
  const [videoDuration, setVideoDuration] = useState(0);
  const [videoProgress, setVideoProgress] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [muted, setMuted] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [captionMenu, setShowCaptionMenu] = useState(false);
  const [videoData, setVideoData] = useState({});
  const [subtitle,setSubtitle] = useState(null)
  const [playBackSpeedMenu, setPlayBackSpeedMenu] = useState(false);
  const [playBackSpeed,setPlayBackSpeed] = useState({label:"Normal",value:1})
  const [audioTrackMenu, setShowAudioTrackMenu] = useState(false);
  const [audioTrack,setAudioTrack] = useState(null)
  const [buffering,setBuffering] = useState(false)
  const onLoad = useCallback(
    data => {
      console.log("on load:",data)
      setVideoData(data)
      setVideoDuration(data.duration);
      setVideoLoading(false);
      if(data.audioTracks){
        setAudioTrack({
          type: "title",
          value: data.audioTracks[0].title
        })
      }
    },
    [setVideoDuration, setVideoLoading],
  );

  const onBuffering = useCallback(
    data => {
      console.log("onBuffering:",data)
      setBuffering(data.isBuffering?true:false)
    },
    [setBuffering],
  );

  const onProgress = useCallback(
    data => {
      setVideoProgress(data);
    },
    [setVideoProgress],
  );

  const playPauseVideo = () => {
    setPause(!pause);
  };

  const showHideControll = () => {
    setShowControll(!showControll);
  };

  const toggleFullScreen = () => {
    setFullscreen(!fullscreen);
  };

  const toggleMute = () => {
    setMuted(!muted);
  };

  const player = useRef();

  const seekVideo = value => {
    setPause(false);
    player.current.seek(value);
  };

  const openMenu = () =>{
      setShowMenu(true)
      setShowControll(false)
  }

  const closeMenu=()=>{
    setShowMenu(false)
  }

  const openCaptionMenu = () =>{
    setShowMenu(false)
    setShowCaptionMenu(true)
  }

  const closeCaptionMenu=()=>{
    setShowCaptionMenu(false)
    setShowMenu(false)
  }

  const openPlayBackSpeedMenu = () =>{
    setShowMenu(false)
    setPlayBackSpeedMenu(true)
  }

  const closePlayBackSpeedMenu=()=>{
    setPlayBackSpeedMenu(false)
    setShowMenu(false)
  }

  const openAudioTrackMenu = () =>{
    setShowMenu(false)
    setShowAudioTrackMenu(true)
  }

  const closeAudioTrackMenu=()=>{
    setShowAudioTrackMenu(false)
    setShowMenu(false)
  }

  

  return (
    <View style={styles.container}>
      <Video
        ref={player}
        source={{uri}}
        style={styles.videoStyle}
        selectedTextTrack={subtitle}
        selectedAudioTrack={audioTrack}
        onLoad={onLoad}
        onProgress={onProgress}
        paused={pause}
        fullscreen={fullscreen}
        muted={muted}
        resizeMode="contain"
        rate={playBackSpeed.value}
        onBuffer={onBuffering}
      />
      <TouchableWithoutFeedback onPress={showHideControll}>
        <View
          style={styles.touchBoxContainer}
        />
      </TouchableWithoutFeedback>
      {videoLoading && (
        <View
          style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="white" />
        </View>
      )}
      {!videoLoading && showControll && (
        <View style={styles.controllerContainer}>
          <VideoControll
            showHideControll={showHideControll}
            toggleFullScreen={toggleFullScreen}
            videoDuration={videoDuration}
            videoProgress={videoProgress}
            playPauseVideo={playPauseVideo}
            pause={pause}
            toggleMute={toggleMute}
            muted={muted}
            seekVideo={seekVideo}
            close={close}
            openMenu={openMenu}
            buffering={buffering}
          />
        </View>
      )}
      {
        showMenu && 
        <View style={[styles.controllerContainer]}>
          <VideoMenu closeMenu={closeMenu} openAudioTrackMenu={openAudioTrackMenu} openCaptionMenu={openCaptionMenu} openPlayBackSpeedMenu={openPlayBackSpeedMenu} playBackSpeed={playBackSpeed}/>
        </View>
      }
      {
        audioTrackMenu && 
        <View style={[styles.controllerContainer]}>
          <AudioTrackMenu closeMenu={closeAudioTrackMenu} videoData={videoData} setAudioTrack={setAudioTrack} audioTrack={audioTrack}/>
        </View>
      }
      {
        captionMenu && 
        <View style={[styles.controllerContainer]}>
          <CaptionMenu closeMenu={closeCaptionMenu} videoData={videoData} setSubtitle={setSubtitle} subtitle={subtitle}/>
        </View>
      }
      {
        playBackSpeedMenu && 
        <View style={[styles.controllerContainer]}>
          <PlayBackSpeedMenu closeMenu={closePlayBackSpeedMenu} setPlayBackSpeed={setPlayBackSpeed} playBackSpeed={playBackSpeed}/>
        </View>
      }
      
    </View>
  );
};

export default React.memo(VideoPlayer);

const styles = {
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  controllerContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  loadingContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,.3)',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  touchBoxContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0)',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
};
