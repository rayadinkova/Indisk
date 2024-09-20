import React from "react";
import { ScrollView, View, Text, Image, Button, TextInput } from "react-native";
import { Link } from "@react-navigation/native";
import size from "../src/styles/fonts";
import screens from "../src/styles/screens";
import sections from "../src/styles/sections";
import buttons from "../src/styles/buttons";

export default function Contact() {
  return (
    <View style={screens.default}>
      <View style={{ marginLeft: 8 }}>
        <Text style={{ marginBottom: 10, fontSize: 20, color: "#24372B" }}>
          Phone number
        </Text>
        <Text style={{ fontSize: 15, color: "#61846E" }}>+45 91 80 46 96 </Text>
      </View>
      <View style={{ marginLeft: 8, marginTop: 35 }}>
        <Text style={{ marginBottom: 10, fontSize: 20, color: "#24372B" }}>
          Email
        </Text>
        <Text style={{ fontSize: 15, color: "#61846E" }}>indisk@gmail.com</Text>
      </View>
      <View style={{ marginLeft: 8, marginTop: 35 }}>
        <Text style={{ marginBottom: 10, fontSize: 20, color: "#24372B" }}>
          Website
        </Text>
        <Text style={{ fontSize: 15, color: "#61846E" }}>Indisk.com</Text>
      </View>
      <View style={{ marginLeft: 8, marginTop: 35 }}>
        <Text style={{ marginBottom: 10, fontSize: 20, color: "#24372B" }}>
          Our location
        </Text>
        <Text style={{ fontSize: 15, color: "#61846E" }}>
          Norregade 40, 1860 Aarhus
        </Text>
        <Text>google maps heer</Text>
      </View>

      <TextInput style={{ width: 50, height: 50, borderColor: "black" }} />
      <Button onPress={() => navigation.navigate("Home")} title="go to Home" />
    </View>
  );
}
