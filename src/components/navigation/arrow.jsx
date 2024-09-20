import React from "react";
import { View } from "react-native";
import AntdesignIcon from "react-native-vector-icons/AntDesign";
import HomeScreen from "../../screens/Home";

import { TouchableOpacity } from "react-native-gesture-handler";

const goBack = () => {
  return onPress({ HomeScreen });
};

export default function NavigationArrow({ navigation }) {
  return (
    <TouchableOpacity>
      <View style={{ marginBottom: 20, marginLeft: 230 }}>
        <AntdesignIcon
          name="arrowright"
          size={25}
          color="white"
          onPress={goBack}
        />
      </View>
    </TouchableOpacity>
  );
}
