
import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

const TabBarItem = ({
  title,
  selected,
  onPress
}) => (
  <TouchableOpacity
    style={[
      styles.item,
      selected && styles.selected,
    ]}
    onPress={onPress}
  >
    <Text
      style={[
        styles.text,
        selected && styles.selectedText,
      ]}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 17,
    borderRightWidth: 1,
    borderColor: '#ededed',
  },
  selected: {
    backgroundColor: '#ffffff',
  },
  text: {
    fontSize: 14,
    color: '#888888',
  },
  selectedText: {
    color: '#333333',
    fontWeight: 'bold',
  },
});

export default TabBarItem;
