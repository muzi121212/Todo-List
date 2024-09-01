import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState([
        { id: '1', title: 'Buy groceries', category: 'Shopping' },
        { id: '2', title: 'Finish project report', category: 'Work' },
        { id: '4', title: 'Read a book', category: 'Leisure' },
        { id: '5', title: 'Doctor appointment', category: 'Health' },
        
      ]);

  const addTask = (title, category) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      category,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (taskId, newTitle, newCategory) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, title: newTitle, category: newCategory } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const filteredTasks = tasks.filter(task => task.id !== taskId);
    setTasks(filteredTasks);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, editTask, deleteTask }}>
      {children}
    </TaskContext.Provider>
  );
};
