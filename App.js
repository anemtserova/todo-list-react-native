import { View, Text, TextInput, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([]);
	const textChangeHandler = (text) => {
		setInput(text);
	};
	const createTaskHandler = () => {
		if (!input) return alert('No task is added.');
		alert(input);
		const newTodo = {
			input,
			isCompleted: false,
		};

		setTodos((todos) => [...todos, newTodo]);
		setInput('');
	};

	return (
		<View style={styles.body}>
			<View>
				<Text style={styles.heading}>To do list</Text>
			</View>
			<View style={styles.taskBox}>
				<TextInput
					placeholder="Add task"
					value={input}
					onChangeText={textChangeHandler}
				/>
				<Button
					title="Add task"
					onPress={createTaskHandler}
					onSubmitEditing={createTaskHandler}
				/>
			</View>
			<View>
				<Text>View</Text>
			</View>
		</View>
	);
}

const styles = {
	body: {
		padding: 20,
		alignItems: 'center',
	},
	heading: {
		fontSize: 30,
		marginTop: 30,
		fontWeight: 'bold',
	},
	taskBox: {
		flexDirection: 'row',
		width: 300,
		borderWidth: 1,
		justifyContent: 'space-between',
		borderRadius: 5,
		marginTop: 20,
	},
};
