import {
  View,
  TextInput,
  Button,
  Modal,
  StyleSheet,
  Image,
} from "react-native";
import { useState } from "react";
import React from "react";

export default function Input({ onConfirm, modelIsVisible, cancelPress }) {
  const [text, setText] = useState("default value");

  // source={{uri: 'https://reactnative.dev/img/tiny_logo.png'}}
  // source={require('@expo/snack-static/react-native-logo.png')}

  return (
    <Modal visible={modelIsVisible}>
      <View style={styles.container}>
        <Image
          // source={{
          //   uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          // }}
          source={require("../picture.png")}
          style={styles.logo}
        />
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
        <Button title="Cancel" onPress={cancelPress} />
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
  logo: {
    width: 100,
    height: 100,
  },
});
