/* eslint-disable prettier/prettier */
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { TabNavigator } from "./HomeScreenStack.navigtor";

export const Navigation = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};
