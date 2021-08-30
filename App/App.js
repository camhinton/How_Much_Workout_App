import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/Components/HomeScreen';
import { WorkoutHistory } from './src/Components/WorkoutHistory';
import { WorkoutPlan } from './src/Components/WorkoutPlan';
import { WorkoutTracker } from './src/Components/WorkoutTracker';


const Stack = createNativeStackNavigator();

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
          component={WorkoutHistory}
        />
        <Stack.Screen 
          name="WorkoutPlans"
          component={WorkoutPlan}
        />
        <Stack.Screen 
          name="WorkoutTracker"
          component={WorkoutTracker}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
  white: {
    color: "#fff",
  },
  logo: {
    width: 200,
    height: 200,
  },
});
