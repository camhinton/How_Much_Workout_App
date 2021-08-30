import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { WorkoutHistory } from './src/screens/WorkoutHistory';
import { WorkoutPlan } from './src/screens/WorkoutPlan';
import { WorkoutTracker } from './src/screens/WorkoutTracker';
import { styles } from './src/styles/styles';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
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
