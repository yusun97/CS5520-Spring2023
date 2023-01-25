import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import React from "react";

export default function Input({ sendChangedText }) {
  const [text, setText] = useState("default value");

  return (
    <View>
      <TextInput
        value={text}
        onChangeText={(changedText) => {
          setText(changedText);
        }}
        style={{ backgroundColor: "#eee" }}
        placeholder="type here"
      />

      <Button
        title="Confirm"
        onPress={() => {
          //we need arrow function, instead of just passing the function
          sendChangedText(text);
          setText("");
        }}
      />
    </View>
  );
}
