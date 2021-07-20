import React from "react";

import BookingScreen from "./screens/BookingScreen";

import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

console.disableYellowBox = true;

// define screens
const RootStack = createStackNavigator({
  // entry screen
  BookingScreen: { screen: BookingScreen, navigationOptions: { headerShown: false } },
});

const AppNavigator = createAppContainer(RootStack);

export default class App extends React.Component {
  // Entry component to the application
  render() {
    return <AppNavigator />;
  }
}