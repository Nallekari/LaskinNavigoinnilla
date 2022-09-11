import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';


export default function History({ route, navigation }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
    <SafeAreaView style={styles.container}>
      <Text>History</Text>
      <FlatList style={styles.list}
        data={data}
        renderItem={({ item }) =>
          <Text>{item.key}</Text>
        }
        extraData={data}
      />
    </SafeAreaView>
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
