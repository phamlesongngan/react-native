import React from "react";
import { Image } from "react-native";
import { createAppContainer, createBottomTabNavigator } from "react-navigation";
import { ControlsStack, HomeStack, SettingsStack } from "./Stacks";

const App = createBottomTabNavigator(
    {
        "Weather Details": { screen: HomeStack },
        "Control Screen": { screen: ControlsStack },
        "Setting Screen": { screen: SettingsStack }
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Weather Details") {
                    iconName = require("./icons/weather.png");
                } else if (routeName === "Control Screen") {
                    iconName = require("./icons/controls.png");
                } else if (routeName === "Setting Screen") {
                    iconName = require("./icons/settings.png");
                }
                return (
                    <Image
                        source={iconName}
                        resizeMode={"contain"}
                        style={{ width: 21, height: 21, tintColor: "#ffffff" }}
                    />
                );
            }
        }),
        tabBarOptions: {
            showIcon: true,
            activeTintColor: "#ffffff",
            inactiveTintColor: "#C0C0C0",
            activeBackgroundColor: "#2e8b57",
            inactiveBackgroundColor: "#2e8b57",
            labelStyle: {
                fontSize: 12
            }
        }
    }
);

export default createAppContainer(App);
