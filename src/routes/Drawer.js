import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppStack } from "./Navigator";

const Drawer = createDrawerNavigator();

export default function DrawerMenu() {
  <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: "white",
        zIndex: 100,
      },
      drawerPosition: "right",
    }}
  >
    <Drawer.Screen name="Events" component={AppStack} />
  </Drawer.Navigator>;
}
