import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Surface, Title } from "react-native-paper";
import Feather from "react-native-vector-icons/Feather";
import { Link } from "@react-navigation/native";

export default function CustomHeader({
  menu,
  back,
  title,
  right,
  rightFunction,
  optionalIcon,
  optionalFunc,
  navigation,
  headerBG,
}) {
  return (
    <Surface style={[styles.header, { backgroundColor: { headerBG } }]}>
      <View style={styles.view}>
        {menu && (
          <Link to={{ screen: "Menu" }}>
            <TouchableOpacity>
              <Feather name="menu" size="15" color="white" />
            </TouchableOpacity>
          </Link>
        )}
        {back && (
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Feather name="arrow-left" size="15" color="white" />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.view}>
        <Title style={{ color: "white" }}>{title}</Title>
      </View>
      <View style={[styles.view, styles.rightView]}>
        {optionalFunc && (
          <TouchableOpacity onPress={optionalFunc}>
            <Feather name={optionalIcon} size="15" color="white" />
          </TouchableOpacity>
        )}
        {rightFunction && (
          <TouchableOpacity onPress={rightFunction}>
            <Feather name={right} size="15" color="white" />
          </TouchableOpacity>
        )}
      </View>
    </Surface>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    elevation: 4,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "pink",
  },
  view: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    elevation: 4,
  },
  rightView: {
    justifyContent: "flex-end",
  },
});
