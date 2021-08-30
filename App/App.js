import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.white}>How Much?</Text>
      <Image source={require('./assets/how_much.jpg')} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#fff'
  }
});
