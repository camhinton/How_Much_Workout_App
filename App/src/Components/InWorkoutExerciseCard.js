import React, { Component } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { Card } from 'react-native-elements';

const sets = [
	{
		reps: 4,
		weight: 50,
	},
	{
		reps: 5,
		weight: 100,
	},
];

export const InWorkoutExerciseCard = ({ navigation }) => {
	return (
		<Card containerStyle={{ backgroundColor: '#64D2FF' }}>
			<View
				style={{
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<Text>Bench Press</Text>
				<Text>8-12 Reps</Text>
			</View>

			{sets.map((set, i) => {
				return (
					<View>
						<Card.Divider />
						<View
							key={i}
							style={{
								flexDirection: 'row',
							}}
						>
							<Text>{set.reps}</Text>
							<Text> x </Text>
							<Text>{set.weight}</Text>
						</View>
					</View>
				);
			})}

			<Card.Divider />
		</Card>
	);
};
