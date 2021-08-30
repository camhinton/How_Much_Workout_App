import React from 'react';
import { Text, SafeAreaView } from 'react-native';
import { styles } from '../../App';

export const WorkoutTracker = ({ navigation }) => {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.white}>Workout Tracker</Text>
      </SafeAreaView>
    );
  };