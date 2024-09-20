import React, { useState } from "react";
import { ScrollView, View, Text, Image, Button, TextInput } from "react-native";
import { Link } from "@react-navigation/native";
import size from "../src/styles/fonts";
import screens from "../src/styles/screens";
import sections from "../src/styles/sections";
import buttons from "../src/styles/buttons";
import CustomComponent from "../components/CustomComponent";

export default function Reservations() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("");

  return (
    <ScrollView style={screens.default}>
      <View style={{ marginLeft: 118 }}>
        <Text style={{ fontSize: 25 }}>Book a table</Text>
      </View>

      <ScrollView style={{ flex: 1 }}>
        <CustomComponent
          label="First name"
          placeholder="Write your first name here"
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomComponent
          label="Last name"
          placeholder="Write your last name here"
          value={lastName}
          onChangeText={setLastName}
        />
        <CustomComponent
          label="Email"
          placeholder="Write your email here"
          value={email}
          onChangeText={setEmail}
        />
        <CustomComponent
          label="Phone number"
          placeholder="Write your phone number here"
          value={phone}
          onChangeText={setPhone}
        />
        <CustomComponent
          label="Date"
          placeholder="Write down the date you want to place your reservation"
          value={date}
          onChangeText={setDate}
        />
        <CustomComponent
          label="Time of day"
          placeholder="Write down the time of day of your reservation"
          value={time}
          onChangeText={setTime}
        />
        <CustomComponent
          label="Number of people"
          placeholder="Write down the number of people for the reservation here"
          value={people}
          onChangeText={setPeople}
        />
      </ScrollView>

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
        <Text style={{ color: "#EBF2EE", fontSize: 20 }}>Book a table</Text>
      </View>
    </ScrollView>
  );
}
