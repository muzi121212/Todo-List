import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import TodoItem from '../components/TodoItem';
import Button from '../components/Button';

const HomeScreen = ({ navigation }) => {
  const todos = useSelector(state => state.todos);

  return (
    <View style={styles.container}>
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem item={item} />}
      />
      <Button title="Add Todo" onPress={() => navigation.navigate('AddTodo')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
});

export default HomeScreen;
