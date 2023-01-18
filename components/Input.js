import { View, TextInput } from 'react-native'
import { useState } from 'react';
import React from 'react'

export default function Input({sendChangedText}) {
    const [text, setText] = useState();

  function changeTextHandler(changedText){
    setText(changedText);
    sendChangedText(changedText);
  }

  return (
    <View>
      <TextInput 
      value = {text} 
      onChangeText = {changeTextHandler} 
      style = {{backgroundColor:"#eee"}}
      placeholder = "type here"
      />
    </View>
  )
}