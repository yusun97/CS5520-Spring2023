import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, Image } from "react-native";
import Header from "./components/Header";
import Input from "./components/Input";

export default function App() {
  const name = "my awesome app";
  const [enteredText, setEnteredText] = useState();
  const [modalVisible, setModalVisible] = useState(false);

  function onTextEntered(changedText) {
    setEnteredText(changedText);
    setModalVisible(false);
  }

  function onCancel() {
    setModalVisible(false);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topperContainer}>
        <Header appName={name} />
        <Input
          modelIsVisible={modalVisible}
          onConfirm={onTextEntered}
          cancelPress={onCancel}
        />
        <Button
          title="Add a Task"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>You text will show here{enteredText}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  topperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
    // alignSelf: "stretch",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    color: "purple",
    // backgroundColor: "grey",
    // borderRadius: 10,
    padding: 5,
  },
  textContainer: {
    backgroundColor: "grey",
    borderRadius: 5,
  },
});
