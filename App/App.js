import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/HomeScreen';
import { WorkoutHistory } from './src/screens/WorkoutHistory';
import { WorkoutPlan } from './src/screens/WorkoutPlan';
import { WorkoutTracker } from './src/screens/WorkoutTracker';
import { InWorkoutExerciseCard } from './src/Components/InWorkoutExerciseCard';
import { styles } from './src/styles/styles';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Home' component={HomeScreen} />
				<Stack.Screen name='WorkoutHistory' component={WorkoutHistory} />
				<Stack.Screen name='WorkoutPlans' component={WorkoutPlan} />
				<Stack.Screen name='WorkoutTracker' component={WorkoutTracker} />

				<Stack.Screen
					name='InWorkoutExerciseCard'
					component={InWorkoutExerciseCard}
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
		color: '#fff',
	},
	logo: {
		width: 200,
		height: 200,
	},
});
