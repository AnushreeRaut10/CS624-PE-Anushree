
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const Button = ({ submitTodo }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={submitTodo}
    >
      <Text style={styles.buttonText}>
        Submit
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 15,
    marginLeft: 120,
    marginRight: 20,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: '#333333',
    fontSize: 16
  }
});

export default Button;
