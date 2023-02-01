import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ appName }) {
  // console.log(appName);
  return (
    <View style={styles.header}>
      <Text>Welcome to {appName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: "center",
    justifyContent: "center",
    borderColor: "blueviolet",
    borderWidth: 1,
    frontSize: 24,
    color: "purple",
  },
});
