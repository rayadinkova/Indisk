import React from "react";
import { ScrollView, View, Text, Image, Button } from "react-native";
import { Link } from "@react-navigation/native";
import size from "../src/styles/fonts";
import screens from "../src/styles/screens";
import sections from "../src/styles/sections";
import buttons from "../src/styles/buttons";
import CustomHeader from "../components/header/CustomHeader";
import Antdesign from "@expo/vector-icons/AntDesign";

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView style={screens.default}>
      {/*MENU SECTION*/}
      <View style={sections.menusection}>
        <Text style={size.title}>Our Menu</Text>
        <Link to={{ screen: "Menu" }}>
          <View style={buttons.viewmore}>
            <Text style={size.viewmorecta}>View more</Text>
            <Antdesign style={buttons.viewmorearrow} name="right" />
          </View>
        </Link>
      </View>
      <View style={sections.mealsection}>
        <Image
          style={sections.mealssectionimages}
          source={require("../src/images/meals_section/chicken_tikka.png.png")}
        />
        <Image
          style={sections.mealssectionimages}
          source={require("../src/images/meals_section/korma.png.png")}
        />
        <Image
          style={sections.mealssectionimages}
          source={require("../src/images/meals_section/choley.png.png")}
        />
        <Image
          style={sections.mealssectionimages}
          source={require("../src/images/meals_section/butter_panner.png.png")}
        />
      </View>
      <View style={sections.mealssectiontext}>
        <Text style={{ textAlign: "center" }}>Tikka {"\n"} Masala</Text>
        <Text style={{ textAlign: "center" }}>Chicken {"\n"} Korma</Text>
        <Text style={{ textAlign: "center" }}>Choley {"\n"} Masala</Text>
        <Text style={{ textAlign: "center" }}>Butter {"\n"} paneer</Text>
      </View>

      {/*POPULAR DISHES SECTION*/}
      <View style={sections.populardishessectionspacing}>
        <Text style={size.title}>Popular dishes</Text>
      </View>
      <ScrollView horizontal={true} style={sections.dishscrollcontainer}>
        <View style={[sections.popularimagesscroll, sections.shadowProps]}>
          <Image
            style={sections.populardishesimages}
            source={require("../src/images/popular_dishes/butter_chicken.png")}
          />
          <Image
            style={sections.populardishesimages}
            source={require("../src/images/popular_dishes/chicken_tikka_masala.png")}
          />
          <Image
            style={sections.populardishesimages}
            source={require("../src/images/popular_dishes/thai_red_curry.png")}
          />
          <Image
            style={sections.populardishesimages}
            source={require("../src/images/popular_dishes/tofu_spinach_masala.png")}
          />
        </View>

        {/*BUTTER CHICKEN*/}
        <View style={sections.butterchickentext}>
          <Text style={size.butterchickentitle}>Butter chicken</Text>
          <Text style={size.butterchickendescription}>
            Chicken, butter sauce
          </Text>

          <View style={sections.pricetag}>
            <View style={size.pricetagcontainer}>
              <Text style={size.pricetag}>49kr</Text>
            </View>

            <View style={sections.rating}>
              <Antdesign name="star" style={size.homestar} />
              <Text style={size.rating}>5.0</Text>
            </View>
          </View>
        </View>

        {/*CHICKEN TIKKA*/}
        <View style={sections.chickentikkatext}>
          <Text style={size.tikkatitle}>Chicken Tikka Masala</Text>
          <Text style={size.tikkadescription}>Chicken, tikka sauce</Text>

          <View style={sections.pricetag}>
            <View style={size.pricetagcontainer}>
              <Text style={size.pricetag}>49kr</Text>
            </View>

            <View style={sections.rating}>
              <Antdesign name="star" style={size.homestar} />
              <Text style={size.rating}>4.8</Text>
            </View>
          </View>
        </View>

        {/*THAI RED CURRY*/}
        <View style={sections.thairedtext}>
          <Text style={size.thairedtitle}>Thai Red curry</Text>
          <Text style={size.thaireddescription}>Chicken, thai red sauce</Text>

          <View style={sections.pricetag}>
            <View style={size.pricetagcontainer}>
              <Text style={size.pricetag}>49kr</Text>
            </View>

            <View style={sections.rating}>
              <Antdesign name="star" style={size.homestar} />
              <Text style={size.rating}>4.9</Text>
            </View>
          </View>
        </View>

        {/*TOFU SPINACH MASALA*/}
        <View style={sections.tofuspinachtext}>
          <Text style={size.tofuspinachtitle}>Tofu Spinach Masala</Text>
          <Text style={size.tofuspinachdescription}>
            Tofu, spinach, tikka sauce
          </Text>

          <View style={sections.pricetag}>
            <View style={size.pricetagcontainer}>
              <Text style={size.pricetag}>49kr</Text>
            </View>

            <View style={sections.rating}>
              <Antdesign name="star" style={size.homestar} />
              <Text style={size.rating}>4.9</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/*INDISK PLATE SECTION*/}
      <View style={screens.default}>
        <Text style={size.title}>Indisk Plate</Text>
        <Image
          style={sections.indiskplateimage}
          source={require("../src/images/indisk_plate/indiskplate.png")}
        />

        <View style={sections.indiskplatetext}>
          <View style={sections.indiskplatepromotext}>
            <Text style={size.fortext}>FOR</Text>
            <Text style={size.promonumbertext}>79kr</Text>
          </View>

          <Text style={size.deliciousindianplatetext}>
            Delicious Indian plate
          </Text>
        </View>

        <Link to={{ screen: "Menu" }}>
          <View style={buttons.seemore}>
            <Text style={size.seemorecta}>See more</Text>
            <Antdesign name="arrowright" style={buttons.seemorearrow} />
          </View>
        </Link>
      </View>

      {/*DESSERT SECTION*/}
      <View style={screens.default}>
        <Image
          source={require("../src/images/dessert_section/dessert_cover.png")}
        />

        <View style={sections.dessertsectiontext}>
          <Text style={size.dessertsection_h1}>Having a sweet tooth?</Text>
          <Text style={size.dessertsection_h2}>Don't worry, we got you!</Text>
          <Link to={{ screen: "Menu" }}>
            <View style={buttons.seemenu}>
              <Text style={size.seemenucta}>See menu</Text>
            </View>
          </Link>
        </View>

        <ScrollView horizontal={true} style={sections.dishscrollcontainer}>
          <View style={[sections.popularimagesscroll, sections.shadowProps]}>
            <Image
              style={sections.populardishesimages}
              source={require("../src/images/dessert_section/pear_loaf.png")}
            />

            <Image
              style={sections.populardishesimages}
              source={require("../src/images/dessert_section/mango_bowl.png")}
            />
            <Image
              style={sections.populardishesimages}
              source={require("../src/images/dessert_section/motcha.png")}
            />
            <Image
              style={sections.populardishesimages}
              source={require("../src/images/dessert_section/chocolate_lassi.png")}
            />
          </View>

          {/*PEAR LOAF*/}
          <View style={sections.butterchickentext}>
            <Text style={size.butterchickentitle}>Pear and Chocolate loaf</Text>
            <Text style={size.butterchickendescription}>
              Pears, chcolate batter
            </Text>

            <View style={sections.pricetag}>
              <View style={size.pricetagcontainer}>
                <Text style={size.pricetag}>49kr</Text>
              </View>

              <View style={sections.rating}>
                <Antdesign name="star" style={size.homestar} />
                <Text style={size.rating}>5.0</Text>
              </View>
            </View>
          </View>

          {/*MANGO BOWL*/}
          <View style={sections.chickentikkatext}>
            <Text style={size.tikkatitle}>Mango smoothie bowl</Text>
            <Text style={size.tikkadescription}>Mango, frozen berries mix</Text>

            <View style={sections.pricetag}>
              <View style={size.pricetagcontainer}>
                <Text style={size.pricetag}>49kr</Text>
              </View>

              <View style={sections.rating}>
                <Antdesign name="star" style={size.homestar} />
                <Text style={size.rating}>4.9</Text>
              </View>
            </View>
          </View>

          {/*MOTCHA*/}
          <View style={sections.thairedtext}>
            <Text style={size.thairedtitle}>Salted caramel motcha</Text>
            <Text style={size.thaireddescription}>
              Caramel, chocolate filling
            </Text>

            <View style={sections.pricetag}>
              <View style={size.pricetagcontainer}>
                <Text style={size.pricetag}>79kr</Text>
              </View>

              <View style={sections.rating}>
                <Antdesign name="star" style={size.homestar} />
                <Text style={size.rating}>5.0</Text>
              </View>
            </View>
          </View>

          {/*MANGO LASSI*/}
          <View style={sections.tofuspinachtext}>
            <Text style={size.tofuspinachtitle}>Chocolate mango lassi</Text>
            <Text style={size.tofuspinachdescription}>Mango sirup, cocoa</Text>

            <View style={sections.pricetag}>
              <View style={size.pricetagcontainer}>
                <Text style={size.pricetag}>29kr</Text>
              </View>

              <View style={sections.rating}>
                <Antdesign name="star" style={size.homestar} />
                <Text style={size.rating}>4.9</Text>
              </View>
            </View>
          </View>
        </ScrollView>

        {/*RESERVATIONS SECTION*/}
        <View style={screens.default}>
          <Text style={size.reservationstitle}>Reservations</Text>
          <Image
            style={sections.reservationsimage}
            source={require("../src/images/reservations_section/reservations.png")}
          />

          <View>
            <Text style={size.reservationstitletext}>Book a table</Text>
            <Text style={size.reservationsdescriptiontext}>
              and enjoy your dinner {"\n"} with a group of friends
            </Text>
          </View>

          <Link to={{ screen: "Reservations" }}>
            <View style={sections.reservationssection}>
              <Text style={size.booknowcta}>Book now</Text>
              <Antdesign name="star" style={size.homestar} />
            </View>
          </Link>
        </View>
      </View>

      <Button onPress={() => navigation.navigate("Menu")} title="Go to Menu" />
    </ScrollView>
  );
}
