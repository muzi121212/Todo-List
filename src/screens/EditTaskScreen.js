// src/screens/EditTaskScreen.js
import React, { useState, useContext, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { TaskContext } from '../../context/TaskContext';


const EditTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const { tasks, editTask } = useContext(TaskContext);
  const task = tasks.find(t => t.id === taskId);
  const [title, setTitle] = useState(task ? task.title : '');
  const [category, setCategory] = useState(task ? task.category : '');

  const handleSaveTask = () => {
    editTask(taskId, title, category);
    navigation.goBack();
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20, color:'#6200EE' }}>Edit Task</Text>
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
        onPress={handleSaveTask}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Save Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditTaskScreen;
