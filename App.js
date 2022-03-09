import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListRestau from "./src/components/ListeRestau";

export default function App() {
  const restaurants = [
      {id:1,image:require("./assets/restaurant1.png"),titre: "Bonjour", description: "description"},
      {id:1,image:require("./assets/restaurant1.png"),titre: "Bonjour", description: "description"},
      {id:1,image:require("./assets/restaurant1.png"),titre: "Bonjour", description: "description"}
    ]
  return (

    <View style={styles.container}>
      <ListRestau restaurants={restaurants}></ListRestau>
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
