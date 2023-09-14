import React, { useContext } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import Settings from "../screens/Settings";
import { colors } from "../config/Theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import HomeStackScreen from "./HomeStackScreen";
import { ThemeContext } from "../context/ThemeContext";

const Tab = createBottomTabNavigator();

const RootStack = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = colors[theme.mode];
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconname;

            if (route.name === "Trending") {
              iconname = "trending-up";
            } else if (route.name === "Settings") {
              iconname = "cog";
            }

            return (
              <MaterialCommunityIcons
                name={iconname}
                color={color}
                size={size}
              />
            );
          },

          tabBarActiveTintColor: activeColors.ACC,
          tabBarInactiveTintColor: activeColors.TINT,
          tabBarStyle: {
            backgroundColor: activeColors.PRIMA,
          },
          tabBarShowLabel: false,
          headerTitleAlign: "left",
          headerTitleStyle: {
            paddingLeft: 5,
            color: activeColors.TINT,
          },
          headerStyle: {
            backgroundColor: activeColors.NAV,
          },
        })}
      >
        <Tab.Screen
          name="Trending"
          component={HomeStackScreen}
          options={{
            headerShown: false,
          }}
        />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
