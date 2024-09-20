import React from "react";
import { ScrollView, View, Text, Image, Button } from "react-native";
import Antdesign from "react-native-vector-icons/AntDesign";
import { Link } from "@react-navigation/native";
import screens from "../src/styles/screens";
import size from "../src/styles/fonts";
import sections from "../src/styles/sections";

export default function ItemPage() {
  return (
    <ScrollView style={screens.default}>
      <View style={{ marginLeft: 8, marginRight: 8 }}>
        <Antdesign
          style={{ fontSize: 30, color: "#24372B" }}
          name="leftcircle"
        />

        <Image
          style={sections.mangobowlimageitem}
          source={require("../src/images/dessert_section/mango_bowl.png")}
        />

        <Text style={size.mangobowltitle}>Mango smoothie bowl</Text>
        <Text style={size.mangobowldescription}>Mango, frozen berries mix</Text>
      </View>

      <View style={sections.itemrating}>
        <Antdesign style={size.itemstar} name="star" />
        <Text style={size.itemrating}>4.9</Text>
      </View>

      <View
        style={{
          marginLeft: 8,
          width: 90,
          height: 40,
          backgroundColor: "#24372B",
          borderRadius: 4,
          justifyContent: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <Text style={{ color: "#EBF2EE" }}>-</Text>
          <Text style={{ color: "#EBF2EE" }}>1</Text>
          <Text style={{ color: "#EBF2EE" }}>+</Text>
        </View>
      </View>

      <View style={{ marginLeft: 8, marginBottom: 10 }}>
        <Text style={size.extrastitle}>Extras</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginRight: 8,
        }}
      >
        <View
          style={{
            marginLeft: 8,
            flexDirection: "row",
          }}
        >
          {/*Samosa */}
          <View
            style={{
              width: 85,
              height: 55,
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "#24372B",
              backgroundColor: "#EBF2EE",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={size.samosa}>Samosa</Text>
            <View
              style={{
                width: 45,
                height: 20,
                backgroundColor: "#24372B",
                borderRadius: 4,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Text style={{ color: "#EBF2EE", fontSize: 10 }}>+5kr</Text>
            </View>
          </View>
        </View>

        {/*Papadum */}
        <View
          style={{
            width: 85,
            height: 55,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#24372B",
            backgroundColor: "#EBF2EE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={size.samosa}>Papadum</Text>
          <View
            style={{
              width: 45,
              height: 20,
              backgroundColor: "#24372B",
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "#EBF2EE", fontSize: 10 }}>+7kr</Text>
          </View>
        </View>

        {/*Paratha */}
        <View
          style={{
            width: 85,
            height: 55,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#24372B",
            backgroundColor: "#EBF2EE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={size.samosa}>Paratha</Text>
          <View
            style={{
              width: 45,
              height: 20,
              backgroundColor: "#24372B",
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "#EBF2EE", fontSize: 10 }}>+15kr</Text>
          </View>
        </View>

        {/*Naan */}
        <View
          style={{
            width: 85,
            height: 55,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: "#24372B",
            backgroundColor: "#EBF2EE",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={size.samosa}>Naan</Text>
          <View
            style={{
              width: 45,
              height: 20,
              backgroundColor: "#24372B",
              borderRadius: 4,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={{ color: "#EBF2EE", fontSize: 10 }}>+35kr</Text>
          </View>
        </View>
      </View>

      <View
        style={{
          width: 350,
          height: 50,
          backgroundColor: "#24372B",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 35,
          marginBottom: 10,
          marginLeft: 10,
        }}
      >
        <Link to={{ screen: "Cart" }}>
          <Text style={{ color: "#EBF2EE", fontSize: 20 }}>Add to Cart</Text>
        </Link>
      </View>
    </ScrollView>
  );
}
