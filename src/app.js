/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from "react";

import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "./redux/reducers";
import rootSagas from "./redux/sagas";

import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";



import HomeScreen from "./containers/home/home";
import AboutScreen from "./containers/about/about";
import CusomTabs from "./components/CusomTabs";

// init language
i18n.changeLanguage("kh");

// Redux =======
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
    rootReducer,
    //composeEnhancers(applyMiddleware(sagaMiddleware), offline(offlineConfig))
    composeEnhancers(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSagas);
// Redux =======

const TabNavigator = createAppContainer(
    createBottomTabNavigator(
        {
            HomeScreen: HomeScreen,
            AboutScreen: AboutScreen
        },
        {
            animationEnabled: false,
            swipeEnabled: false,
            tabBarComponent: function tabBar({ navigation, screenProps }) {
                return (
                    <CusomTabs
                        navigation={navigation}
                        screenProps={screenProps}
                    />
                );
            }
        }
    )
);

class RootApp extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Provider store={store}>
                <I18nextProvider i18n={i18n}>
                    <TabNavigator />
                </I18nextProvider>
            </Provider>
        );
    }
}

export default RootApp;
