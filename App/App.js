import React from 'react';
import { StyleSheet, Image, Text, SafeAreaView, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/HomeScreen';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="WorkoutHistory"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="WorkoutPlans"
          component={HomeScreen}
        />
        <Stack.Screen 
          name="WorkoutTracker"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  white: {
    color: '#fff'
  },
  logo: {
    width: 200,
    height: 200
  }
});
