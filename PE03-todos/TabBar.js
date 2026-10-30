
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({ type, setType }) => (
  <View style={styles.tabBar}>
    <TabBarItem
      title="All"
      selected={type === 'All'}
      onPress={() => setType('All')}
    />

    <TabBarItem
      title="Active"
      selected={type === 'Active'}
      onPress={() => setType('Active')}
    />

    <TabBarItem
      title="Complete"
      selected={type === 'Complete'}
      onPress={() => setType('Complete')}
    />
  </View>
);

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderColor: '#ededed',
  },
});

export default TabBar;
