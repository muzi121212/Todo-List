import React, { useContext } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TaskContext } from '../../context/TaskContext';

const DeleteTaskScreen = ({ route, navigation }) => {
  const { taskId } = route.params;
  const { tasks, deleteTask } = useContext(TaskContext);
  const task = tasks.find(t => t.id === taskId);

  const handleDeleteTask = () => {
    deleteTask(taskId);
    navigation.goBack();
  };

  if (!task) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ fontSize: 20 }}>Task not found</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, marginBottom: 20,marginLef:10,color:'#6200EE' }}>Delete Task</Text>
      <Text style={{ fontSize: 18, marginBottom: 20 }}>
        Are you sure you want to delete the task "{task.title}"?
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'red',
          padding: 15,
          width:85,
          height:50,
          borderRadius: 5,
          marginBottom: 20,
        }}
        onPress={handleDeleteTask}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Delete Task</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#6200EE',
          padding: 15,
          borderRadius: 5,
          width:85,
          height:50,
        
        }}
        onPress={() => navigation.goBack()}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DeleteTaskScreen;
