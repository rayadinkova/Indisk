import React from "react";
import { ScrollView, View, Text, Button, Image } from "react-native";
import screens from "../src/styles/screens";
import sections from "../src/styles/sections";
import size from "../src/styles/fonts";
import Antdesign from "@expo/vector-icons/AntDesign";
import { Link } from "@react-navigation/native";

export default function Menu() {
  return (
    <ScrollView style={screens.default}>
      {/*MENU FILTER SECTION*/}
      {/*MENU FILTER ROW 2*/}
      <View style={sections.menufilterrow1}>
        <View style={size.menufilteritemboxactive}>
          <Text style={size.menufilteritemtextactive}>Indisk</Text>
        </View>

        <View style={size.vegetarianbox}>
          <Text style={size.menufilteritemtext}>Vegetarian</Text>
        </View>

        <View style={size.veganbox}>
          <Text style={size.menufilteritemtext}>Vegan</Text>
        </View>

        <View style={size.talibox}>
          <Text style={size.menufilteritemtext}>Tali</Text>
        </View>
      </View>

      {/*MENU FILTER ROW 2*/}
      <View style={sections.menufilterrow2}>
        <View style={size.drinksbox}>
          <Text style={size.menufilteritemtext}>Drinks</Text>
        </View>

        <View style={size.dessertsbox}>
          <Text style={size.menufilteritemtext}>Deserts</Text>
        </View>
      </View>

      {/*MEALS SECTION*/}
      <View style={screens.default}>
        <Text style={size.title}>Indisk</Text>

        {/*MEALS SECTION - BUTTER CHICKEN/TIKKA MASALA*/}
        <View style={sections.menusectionview_row1}>
          <View style={{ marginLeft: 8 }}>
            <Link to={{ screen: "Item" }}>
              <Image
                style={sections.menuimages}
                source={require("../src/images/popular_dishes/butter_chicken.png")}
              />
            </Link>
            <View style={{ marginTop: 10 }}>
              <Text style={size.menusectiontitle}>Butter Chicken</Text>
              <Text style={size.menusectiondescription}>
                Chicken, butter sauce
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={sections.menupricetag}>
                <Text style={size.menupricetext}>49kr</Text>
              </View>

              <View style={sections.menurating}>
                <Antdesign style={size.menustar} name="star" />
                <Text style={size.menuratingtext}>5.0</Text>
              </View>
            </View>
          </View>

          <View style={{ marginRight: 8 }}>
            <Image
              style={sections.menuimages}
              source={require("../src/images/popular_dishes/chicken_tikka_masala.png")}
            />

            <View style={{ marginTop: 10 }}>
              <Text style={size.menusectiontitle}>Tikka Masala</Text>
              <Text style={size.menusectiondescription}>
                Chicken, tikka sauce
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={sections.menupricetag}>
                <Text style={size.menupricetext}>49kr</Text>
              </View>

              <View style={sections.menurating}>
                <Antdesign style={size.menustar} name="star" />
                <Text style={size.menuratingtext}>4.9</Text>
              </View>
            </View>
          </View>
        </View>

        {/*MEALS SECTION - CHICKEN KORMA/THAI RED CURRY*/}
        <View style={sections.menusectionview_row2}>
          <View style={{ marginLeft: 8 }}>
            <Image
              style={sections.menuimages}
              source={require("../src/images/menu_page/chicken_korma.png")}
            />

            <View style={{ marginTop: 10 }}>
              <Text style={size.menusectiontitle}>Chicken Korma</Text>
              <Text style={size.menusectiondescription}>
                Chicken, cashew nuts
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={sections.menupricetag}>
                <Text style={size.menupricetext}>49kr</Text>
              </View>

              <View style={sections.menurating}>
                <Antdesign style={size.menustar} name="star" />
                <Text style={size.menuratingtext}>4.9</Text>
              </View>
            </View>
          </View>

          <View style={{ marginRight: 8 }}>
            <Image
              style={sections.menuimages}
              source={require("../src/images/popular_dishes/thai_red_curry.png")}
            />

            <View style={{ marginTop: 10 }}>
              <Text style={size.menusectiontitle}>Thai red Curry</Text>
              <Text style={size.menusectiondescription}>
                Chicken, thai red sauce
              </Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <View style={sections.menupricetag}>
                <Text style={size.menupricetext}>49kr</Text>
              </View>

              <View style={sections.menurating}>
                <Antdesign style={size.menustar} name="star" />
                <Text style={size.menuratingtext}>4.8</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
