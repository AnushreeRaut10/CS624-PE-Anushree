

import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  Platform
} from 'react-native';

import Heading from './Heading';
import Input from './Input';
import Button from './Button';
import TodoList from './TodoList';
import TabBar from './TabBar';

let todoIndex = 0;

class App extends Component {
  constructor() {
    super();

    this.state = {
      inputValue: '',
      todos: [],
      type: 'All',
    };
  }

  // Update text input
  inputChange = (inputValue) => {
    console.log('Input Value:', inputValue);
    this.setState({ inputValue });
  };

  // Add a new todo
  submitTodo = () => {
    const { inputValue } = this.state;

    if (!inputValue.trim()) {
      return;
    }

    const newTodo = {
      title: inputValue.trim(),
      todoIndex: todoIndex++,
      complete: false,
    };

    this.setState(
      (previousState) => ({
        todos: [...previousState.todos, newTodo],
        inputValue: '',
      }),
      () => {
        console.log('Todos:', this.state.todos);
      }
    );
  };

  // Mark todo completed or active
  toggleComplete = (todoIndex) => {
    this.setState(
      (previousState) => ({
        todos: previousState.todos.map((todo) =>
          todo.todoIndex === todoIndex
            ? { ...todo, complete: !todo.complete }
            : todo
        ),
      }),
      () => {
        console.log('Updated Todos:', this.state.todos);
      }
    );
  };

  // Remove todo
  deleteTodo = (todoIndex) => {
    this.setState(
      (previousState) => ({
        todos: previousState.todos.filter(
          (todo) => todo.todoIndex !== todoIndex
        ),
      }),
      () => {
        console.log('Remaining Todos:', this.state.todos);
      }
    );
  };

  // Select filter
  setType = (type) => {
    this.setState({ type });
    console.log('Selected Filter:', type);
  };

  // Get todos matching selected filter
  getVisibleTodos = () => {
    const { todos, type } = this.state;

    if (type === 'Active') {
      return todos.filter((todo) => !todo.complete);
    }

    if (type === 'Complete') {
      return todos.filter((todo) => todo.complete);
    }

    return todos;
  };

  render() {
    const { inputValue, type } = this.state;
    const visibleTodos = this.getVisibleTodos();

    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={
          Platform.OS === 'ios' ? 'padding' : undefined
        }
      >
        <ScrollView
          keyboardShouldPersistTaps="always"
          contentContainerStyle={styles.content}
        >
          <Heading />

          <Input
            inputValue={inputValue}
            inputChange={this.inputChange}
          />

          <TodoList
            todos={visibleTodos}
            toggleComplete={this.toggleComplete}
            deleteTodo={this.deleteTodo}
          />

          <Button submitTodo={this.submitTodo} />
        </ScrollView>

        <TabBar
          type={type}
          setType={this.setType}
        />
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flexGrow: 1,
    paddingTop: 60,
    paddingBottom: 30,
  },
});

export default App;
