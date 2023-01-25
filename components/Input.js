import { View, TextInput, Button, Modal, StyleSheet } from "react-native";
import { useState } from "react";
import React from "react";

export default function Input({ onConfirm, modelIsVisible, cancelPress }) {
  const [text, setText] = useState("default value");

  return (
    <Modal visible={modelIsVisible}>
      <View style={styles.container}>
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
            onConfirm(text);
            setText("");
          }}
        />
        <Button
          title="Cancel"
          onPress={cancelPress}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
