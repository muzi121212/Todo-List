// src/screens/AddTaskScreen.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TaskContext } from '../../context/TaskContext';

const AddTaskScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleAddTask = () => {
    addTask(title, category);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 ,color:'#6200EE'}}>Add New Task</Text>
      <TextInput
        placeholder="Task Title"
        style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 20 }}
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        placeholder="Category"
        style={{ borderWidth: 1, borderColor: '#ddd', padding: 10, marginBottom: 20 }}
        value={category}
        onChangeText={setCategory}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#6200EE',
          padding: 15,
          borderRadius: 30,
        }}
        onPress={handleAddTask}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTaskScreen;
