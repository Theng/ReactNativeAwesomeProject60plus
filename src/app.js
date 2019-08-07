/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React from "react";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./containers/home/home";
import AboutScreen from "./containers/about/about";
import CusomTabs from "./components/CusomTabs";

const TabNavigator = createBottomTabNavigator(
    {
        HomeScreen: HomeScreen,
        AboutScreen: AboutScreen
    },
    {
        animationEnabled: false,
        swipeEnabled: false,
        tabBarComponent: function tabBar({ navigation, screenProps }) {
            return (
                <CusomTabs navigation={navigation} screenProps={screenProps} />
            );
        }
    }
);

export default createAppContainer(TabNavigator);
