
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const TodoButton = ({ onPress, complete, name }) => (
  <TouchableOpacity
    onPress={onPress}
    style={styles.button}
  >
    <Text
      style={[
        styles.text,
        name === 'Done'
          ? styles.complete
          : styles.deleteButton,
        complete && name === 'Done'
          ? styles.completed
          : null,
      ]}
    >
      {name}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    padding: 7,
    marginRight: 5,
    borderColor: '#ededed',
    borderWidth: 1,
    borderRadius: 4,
  },
  text: {
    fontSize: 12,
  },
  complete: {
    color: 'green',
  },
  completed: {
    fontWeight: 'bold',
  },
  deleteButton: {
    color: 'rgba(175, 47, 47, 1)',
  },
});

export default TodoButton;
