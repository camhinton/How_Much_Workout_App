import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from '../styles/styles';

export const WorkoutPlan = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.white}>Workout Plans</Text>
      </SafeAreaView>
    );
  };