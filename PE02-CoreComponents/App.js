
import React, { useState } from 'react';

import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [favoriteCourse, setFavoriteCourse] = useState('');

  const coreCourses = [
    'CS 504 Software Engineering',
    'CS 506 Programming for Computing',
    'CS 519 Cloud Computing Overview',
    'CS 533 Computer Architecture',
    'CS 547 Secure Systems and Programs',
    'CS 622 Discrete Math and Algorithms for Computing',
    'DS 510 Artificial Intelligence for Data Science',
    'DS 620 Machine Learning & Deep Learning',
  ];

  const depthCourses = [
    'CS 624 Full-Stack Development - Mobile App',
    'CS 628 Full-Stack Development - Web App',
  ];

  const capstoneCourses = [
    'CS 687 Computer Science Capstone',
  ];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      keyboardShouldPersistTaps="handled"
    >
      <View style={styles.imageContainer}>
        <Image
          source={require('./assets/icon.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>
          Which course did you like?
        </Text>

        <TextInput
          style={styles.textInput}
          placeholder="ex. CS624"
          value={favoriteCourse}
          onChangeText={setFavoriteCourse}
          autoCapitalize="characters"
        />

        {favoriteCourse.trim() !== '' && (
          <Text style={styles.favoriteText}>
            Your favorite course: {favoriteCourse}
          </Text>
        )}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Core Requirements (24 Credits)
        </Text>

        {coreCourses.map((course, index) => (
          <Text key={index} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Depth of Study (6 Credits)
        </Text>

        {depthCourses.map((course, index) => (
          <Text key={index} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>
          Capstone (3 Credits)
        </Text>

        {capstoneCourses.map((course, index) => (
          <Text key={index} style={styles.courseText}>
            {course}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },

  contentContainer: {
    padding: 20,
    paddingTop: 45,
    paddingBottom: 50,
  },

  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },

  logo: {
    width: 150,
    height: 150,
  },

  inputContainer: {
    marginBottom: 30,
  },

  inputLabel: {
    fontSize: 16,
    color: '#000000',
    marginBottom: 8,
  },

  textInput: {
    height: 45,
    borderColor: '#808080',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    fontSize: 16,
  },

  favoriteText: {
    fontSize: 15,
    color: '#006400',
    marginTop: 10,
  },

  section: {
    marginBottom: 30,
  },

  sectionHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: '#FFFF00',
    color: '#000000',
    padding: 8,
    marginBottom: 8,
  },

  courseText: {
    fontSize: 15,
    color: '#000000',
    lineHeight: 25,
  },
});

export default App;
