
import {
	Dimensions,
	Platform
} from "react-native";
const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const platform = Platform.OS;
const isIphoneX =
platform === "ios" && (deviceHeight === 812 || deviceWidth === 812 || deviceHeight === 896 || deviceWidth === 896);

const constants = {
    isIphoneX,
    deviceHeight,
    deviceWidth,
    platform,
    tabHeight: 48
}

export default constants