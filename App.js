import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  const name = "my awesome app";
  const [text, setText] = useState();

  function changeTextHandler(changedText){
    setText(changedText);
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header appName = {name}/>
      <TextInput 
      value = {text} 
      onChangeText = {changeTextHandler} 
      style = {{backgroundColor:"#eee"}}
      placeholder = "type here"
      />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
