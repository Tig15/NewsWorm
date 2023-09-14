import React, { useContext } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Details from "../screens/Details";
import Home from "../screens/Home";
import { colors } from "../config/Theme";
import { ThemeContext } from "../context/ThemeContext";

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerTitleAlign: "left",
        headerTitleStyle: {
          paddingLeft: 5,
          color: activeColors.TINT,
        },
        headerStyle: {
          backgroundColor: activeColors.NAV,
        },
      }}
    >
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Details" component={Details} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
