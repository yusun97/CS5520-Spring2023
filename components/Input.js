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
  const [text, setText] = useState("");

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
        <View style={styles.buttonContain}>
          <View style={styles.button}>
            <Button
              // disabled={text.length === 0 ? true : false}
              disabled={!text.length}
              title="Confirm"
              onPress={() => {
                //we need arrow function, instead of just passing the function
                onConfirm(text);
                setText("");
              }}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelPress} />
          </View>
        </View>
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
    borderBottomColor: "#000000",
    borderBottomWidth: 1,
  },
  logo: {
    width: 100,
    height: 100,
  },
  input: {
    borderBottomColor: "red",
    birderBottomWidth: 2,
  },
  buttonContain: {
    flexDirection: "row",
  },
  button: {
    marginHorizontal: 10,
    width: "30%",
  },
});
