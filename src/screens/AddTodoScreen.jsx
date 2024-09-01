import React, { useState } from 'react';
import { View, TextInput, StyleSheet,  } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo } from '../slices/todosSlice';
import Button from '../components/Button';
import { Picker } from '@react-native-picker/picker';

const AddTodoScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Personal');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (title.trim()) {
      dispatch(addTodo({
        id: Date.now(),
        title,
        category,
        completed: false,
      }));
      navigation.goBack();
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Todo Title"
        value={title}
        onChangeText={setTitle}
      />
      <Picker
        selectedValue={category}
        style={styles.picker}
        onValueChange={(itemValue) => setCategory(itemValue)}
      >
        <Picker.Item label="Personal" value="Personal" />
        <Picker.Item label="Work" value="Work" />
        <Picker.Item label="Shopping" value="Shopping" />
        <Picker.Item label="Others" value="Others" />
      </Picker>
      <Button title="Add Todo" onPress={handleAddTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    backgroundColor: '#fff',
    fontSize: 16,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default AddTodoScreen;
