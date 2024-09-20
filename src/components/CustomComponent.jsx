import React from "react";
import { View, Text, TextInput } from "react-native";

export default function CustomComponent(props) {
  const { label, placeholder, value, onChangeText, secureTextEntry } = props;
  return (
    <View style={{ marginLeft: 8, marginTop: 35 }}>
      <Text style={{ fontSize: 15, color: "#24372B" }}>{label}</Text>
      <TextInput
        style={{
          marginTop: 10,
          color: "black",
          borderWidth: 1,
          borderRadius: 4,
          borderColor: "#24372B",
          width: 350,
          height: 35,
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
