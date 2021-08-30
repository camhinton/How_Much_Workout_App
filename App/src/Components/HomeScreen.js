import React from 'react';
import { Image, Text, SafeAreaView, Button } from 'react-native';
import { styles } from '../../App';

export const HomeScreen = ({ navigation }) => {
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.white}>How Much?</Text>
			<Image
				style={styles.logo}
				source={require('../../assets/how_much.jpg')}
			/>

			<Button
				title='Workout History'
				onPress={() => navigation.navigate('WorkoutHistory')}
			/>
			<Button
				title='Workout Plans'
				onPress={() => navigation.navigate('WorkoutPlans')}
			/>
			<Button
				title='Start a Workout'
				onPress={() => navigation.navigate('WorkoutTracker')}
			/>
			<Button
				title='Testing Card'
				onPress={() => navigation.navigate('InWorkoutExerciseCard')}
			/>
		</SafeAreaView>
	);
};
