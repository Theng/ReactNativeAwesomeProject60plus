import React, { Component } from "react";
import {
    View,
    TouchableWithoutFeedback
} from "react-native";

import Icon from 'react-native-vector-icons/Ionicons';
import c from "../constant"

class CustomTab extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabs: [
				{
					routeName: "HomeScreen",
					icon: "logo-rss",
					type: "mainTab"
				},
				{
					routeName: "AboutScreen",
					icon: "md-apps",
					type: "mainTab"
				}
			],
			activeRoute: "HomeScreen"
		};

		// console.log("tab props: ", this.props);
	}


	openTab = item => {
		item.type == "mainTab"
			? this.setState({ activeRoute: item.routeName })
			: null;
		this.props.navigation.navigate({
			routeName: item.routeName,
			key: item.routeName
		});
	}

	getColor = item => {
		if (item.routeName == this.state.activeRoute) {
			return "#037AFF";
		} else {
			return "#A1A1A1";
		}
	}

	render() {
		return (
			<View testID="TabBar" style={{ backgroundColor:"#FAFAFA", borderTopWidth: c.platform=="ios"? 1:0, elevation:15, borderColor:"rgba(123,133,122,0.3)", width:c.deviceWidth, height:c.isIphoneX?c.tabHeight+20:c.tabHeight }}>
				<View
					style={{flex:1,flexDirection:"row",justifyContent:"space-between",height:c.tabHeight}}
				>
					{this.state.tabs.map((item, index) => {
						return (
							<TouchableWithoutFeedback testID={item.routeName+"-button"} key={index} onPress={() => this.openTab(item)}>
                                <View style={{flex:1,justifyContent:"center", alignItems: "center"}}>
                                    <Icon size={28} name={item.icon} style={{ color: this.getColor(item) }} />
                                </View>
								
							</TouchableWithoutFeedback>
						);
					})}
				</View>
                <View style={{height:c.isIphoneX?20:0,width:c.deviceWidth}}/>
			</View>
		);
	}
}

export default CustomTab

