import { View, Text, TextInput, Button, ScrollView } from 'react-native';
import { useState } from 'react';
import { TodoItem } from './Components/TodoItem';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
	const [input, setInput] = useState('');
	const [todos, setTodos] = useState([
		{ id: 1, isCompleted: false, isInProgress: false, input: 'Go to the gym' },
		{ id: 2, isCompleted: false, isInProgress: true, input: 'Make your bed' },
	]);
	const textChangeHandler = (text) => {
		setInput(text);
	};

	const todoIdGenerator = todos[todos.length - 1].id + 1;

	const createTaskHandler = () => {
		if (!input) return alert('No task is added.');
		alert(input);
		const newTodo = {
			input,
			id: todoIdGenerator,
			isCompleted: false,
			isInProgress: false,
		};

		setTodos((todos) => [...todos, newTodo]);
		setInput('');
	};

	const deleteTask = (id) => {
		const updatedTodos = todos.filter((todo) => todo.id !== id);
		setTodos(updatedTodos);
	};

	const toggleComplete = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isCompleted: !todo.isCompleted };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	const toggleInProgress = (id) => {
		const updatedTodos = todos.map((todo) => {
			if (todo.id === id) {
				return { ...todo, isInProgress: !todo.isInProgress };
			}
			return todo;
		});
		setTodos(updatedTodos);
	};

	return (
		<SafeAreaProvider>
			<SafeAreaView>
				<ScrollView>
					<View style={styles.body}>
						<View>
							<Text style={styles.heading}>To do list</Text>
						</View>
						<View style={styles.taskBox}>
							<TextInput
								placeholder="Add task"
								value={input}
								onChangeText={textChangeHandler}
								onSubmitEditing={createTaskHandler}
							/>
							<Button title="Add" onPress={createTaskHandler} />
						</View>
						<View style={{ width: '100%' }}>
							{todos.map((todo) => {
								return (
									<TodoItem
										key={todo.input}
										todo={todo}
										onDelete={deleteTask}
										onComplete={toggleComplete}
										onInProgress={toggleInProgress}
									/>
								);
							})}
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>
		</SafeAreaProvider>
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
		width: '100%',
		maxWidth: '100%',
		margin: 10,
		borderWidth: 1,
		justifyContent: 'space-between',
		borderRadius: 5,
	},
};
