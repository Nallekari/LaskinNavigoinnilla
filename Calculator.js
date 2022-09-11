import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';



export default function Calculator({ navigation }) {

  const [text, setText] = useState('');
  const [data, setData] = useState([]);
  const [text2, setText2] = useState('');
  const [result, setResult] = useState('');

  function CalculatePos() {
    setResult(parseInt(text, 10) + parseInt(text2, 10));
    setData([...data, { key: (text + " + " + text2 + " = " + (parseInt(text, 10) + parseInt(text2, 10))) }]);
  }
  
  function CalculateNeg() {
    setResult(parseInt(text, 10) - parseInt(text2, 10));
    setData([...data, { key: (text + " - " + text2 + " = " + (parseInt(text, 10) - parseInt(text2, 10))) }]);
  }


  return (
    <View style={styles.container}>
      <Text>Result: {result}</Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType = 'numeric'
        onChangeText={text => setText(text)} 
        value={text}
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1 }}
        keyboardType = 'numeric'
        onChangeText={text2 => setText2(text2)} 
        value={text2}
      />
      
      <View style={{flex:0.1}}/>
      <View style={{ flexDirection:"row"}}>
        <Button onPress={CalculatePos} title=" + "></Button>
        <View style={{flex:0.1}}/>
        <Button onPress={CalculateNeg} title=" - "></Button>
        <View style={{ flex: 0.1 }} />
        <Button title="History" onPress={() => navigation.navigate('History', {data: data})} />
      </View>
      <StatusBar style="auto" />
    </View>
  );


  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    marginTop: 50
  },

  input: {
    marginTop: 50,
    marginBottom: 5,
    width: 200,
    borderColor: 'gray',
    borderWidth: 1 
  }

}
);
