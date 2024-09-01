import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../slices/todosSlice';

const TodoItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeTodo({ id: item.id }));
  };

  const handleToggle = () => {
    dispatch(toggleTodo({ id: item.id }));
  };

  return (
    <View style={[styles.itemContainer, item.completed ? styles.completed : styles.notCompleted]}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.title}</Text>
        <Text style={styles.categoryText}>{item.category}</Text>
      </View>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleToggle}>
          <Text style={styles.toggleText}>{item.completed ? 'Completed' : 'Mark as completed'}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete}>
          <Text style={styles.deleteText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    marginVertical: 8,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  completed: {
    backgroundColor: '#d4edda', // Greenish background for completed tasks
  },
  notCompleted: {
    backgroundColor: '#f8d7da', // Light reddish background for not completed tasks
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: '500',
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    color: '#888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  toggleText: {
    marginRight: 20,
    fontSize: 16,
    color: '#007BFF',
  },
  deleteText: {
    fontSize: 16,
    color: '#FF6347',
  },
});

export default TodoItem;
