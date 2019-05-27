import { createStackNavigator } from "react-navigation";
import ControlsScreen from "./screens/ControlsScreen";
import DetailsScreen from "./screens/DetailsScreen";
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";

export const HomeStack = createStackNavigator(
    {
        HomeScreen: { screen: HomeScreen },
        DetailsScreen: { screen: DetailsScreen }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#2e8b57"
            },
            headerTitleStyle: {
                textAlign: "center",
                flexGrow: 1,
                alignSelf: "center"
            },
            headerTintColor: "#ffffff",
            title: "ReactNative WeatherApp"
        }
    }
);

export const ControlsStack = createStackNavigator(
    {
        ControlsScreen: { screen: ControlsScreen }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#2e8b57"
            },
            headerTitleStyle: {
                textAlign: "center",
                flexGrow: 1,
                alignSelf: "center"
            },
            headerTintColor: "#ffffff",
            title: "Controls"
        }
    }
);

export const SettingsStack = createStackNavigator(
    {
        SettingsScreen: { screen: SettingsScreen }
    },
    {
        tabBarOptions: {
            activeBackgroundColor: "#2e8b57",
            inactiveBackgroundColor: "#2e8b57"
        }
    }
);
