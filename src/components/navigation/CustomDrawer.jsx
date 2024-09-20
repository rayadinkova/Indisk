import * as React from "react";
import { View } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import NavigationArrow from "./arrow";
import { Link } from "@react-navigation/native";

export default function CustomDrawer(props) {
  return (
    <View style={{ flex: 1, backgroundColor: "#24372B" }}>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: "#24372B" }}
      >
        <View style={{ marginBottom: 20, marginLeft: 230 }}>
          <AntdesignIcon name="arrowright" size={25} color="white" />
        </View>
        {/*<NavigationArrow />*/}
        <View>
          <DrawerItemList {...props} />
        </View>
        <View
          style={{
            marginLeft: 18,
            marginTop: 30,
            paddingTop: 20,
            borderTopWidth: 1,
            borderTopColor: "white",
          }}
        >
          <Feather name="shopping-bag" size={25} color="white" />
        </View>
      </DrawerContentScrollView>
    </View>
  );
}
