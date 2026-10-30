
import React from 'react';
import { View } from 'react-native';
import Todo from './Todo';

const TodoList = ({
  todos,
  deleteTodo,
  toggleComplete
}) => (
  <View>
    {todos.map((todo) => (
      <Todo
        key={todo.todoIndex}
        todo={todo}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
      />
    ))}
  </View>
);

export default TodoList;
