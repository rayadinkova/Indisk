import React, { useState } from "react";
import { View, Text } from "react-native";

export default function FilterComponent() {
  const [isChecked, setChecked] = useState(false);

  const handleCheckChange = () => {
    setChecked(!isChecked);
  };

  return (
    <View>
      <CheckBox value={isChecked} onValueChange={handleCheckChange} />
      <Text>Apply Filter</Text>
    </View>
  );
}
