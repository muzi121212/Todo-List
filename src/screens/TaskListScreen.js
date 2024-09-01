import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { TaskContext } from '../context/TaskContext';

const TaskListScreen = ({ navigation }) => {
  const { tasks } = useContext(TaskContext);

  const renderTask = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#6200EE' }}>
      <Text style={{ fontSize: 18 }}>{item.title}</Text>
      <Text style={{ color: '#888' }}>{item.category}</Text>
      <TouchableOpacity onPress={() => navigation.navigate('EditTask', { taskId: item.id })}>
        <Text style={{ color: 'blue' }}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('DeleteTask', { taskId: item.id })}>
        <Text style={{ color: 'red' }}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderTask}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#6200EE',
          padding: 15,
          borderRadius: 30,
          position: 'absolute',
          bottom: 20,
          right: 20,
        }}
        onPress={() => navigation.navigate('AddTask')}
      >
        <Text style={{ color: '#fff', textAlign: 'center', fontSize: 18 }}>+ Add Task</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TaskListScreen;
