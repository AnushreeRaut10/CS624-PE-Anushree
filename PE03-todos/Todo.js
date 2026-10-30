
import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

import TodoButton from './TodoButton';

const Todo = ({
  todo,
  deleteTodo,
  toggleComplete
}) => (
  <View style={styles.todoContainer}>
    <Text
      style={[
        styles.todoText,
        todo.complete && styles.completedText,
      ]}
    >
      {todo.title}
    </Text>

    <View style={styles.buttons}>
      <TodoButton
        name="Done"
        complete={todo.complete}
        onPress={() => toggleComplete(todo.todoIndex)}
      />

      <TodoButton
        name="Delete"
        onPress={() => deleteTodo(todo.todoIndex)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  todoContainer: {
    marginLeft: 20,
    marginRight: 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#ededed',
    paddingLeft: 14,
    paddingRight: 7,
    paddingTop: 7,
    paddingBottom: 7,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 17,
    flex: 1,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: '#999999',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Todo;
