import { View, Text, Button, Switch } from 'react-native';

export const TodoItem = ({ todo, onDelete, onComplete, onInProgress }) => {
	return (
		<View
			style={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				marginBottom: 5,
				marginTop: 5,
				alignItems: 'center',
			}}>
			<View style={{ width: '45%' }}>
				<Text
					style={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'flex-start',
						fontSize: 20,
						textDecorationLine:
							todo.isCompleted && !todo.isInProgress ? 'line-through' : 'none',
					}}
					key={todo.input}>
					{todo.input}
				</Text>
			</View>
			<View
				style={{
					flex: 1,
					flexDirection: 'row',
					gap: 10,
					height: 50,
					alignItems: 'center',
					justifyContent: 'flex-end',
				}}>
				<Switch
					onValueChange={() => onInProgress(todo.id)}
					value={todo.isInProgress}
				/>
				{todo.isInProgress ? (
					<Text style={{ flexShrink: 1, color: 'orange' }}>In Progress</Text>
				) : (
					<Button
						onPress={() => onComplete(todo.id)}
						title={todo.isCompleted ? 'Undone' : 'Done'}
					/>
				)}

				<Button onPress={() => onDelete(todo.id)} title="Delete" />
			</View>
		</View>
	);
};
