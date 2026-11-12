
import React from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.cardContainer}>

        {/* Profile Image */}
        <View style={styles.cardImageContainer}>
          <Image
            source={require('../../assets/images/user.png')}
            style={styles.cardImage}
          />
        </View>

        {/* Profile Name */}
        <Text style={styles.cardName}>
          John Doe
        </Text>

        {/* Occupation */}
        <Text style={styles.cardOccupation}>
          React Native Developer
        </Text>

        {/* Horizontal Line */}
        <View style={styles.divider} />

        {/* Profile Description */}
        <Text style={styles.cardDescription}>
          John is a really great JavaScript
          developer. He loves using JS to
          build React Native applications
          for iOS and Android.
        </Text>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  cardContainer: {
    backgroundColor: 'dodgerblue',
    width: 300,
    height: 400,
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    alignItems: 'center',
    padding: 15,
  },

  cardImageContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    marginTop: 30,
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  cardImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },

  cardName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 25,
    textAlign: 'center',
  },

  cardOccupation: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 8,
    textAlign: 'center',
  },

  divider: {
    width: 200,
    borderBottomWidth: 2,
    borderBottomColor: 'black',
    marginVertical: 12,
  },

  cardDescription: {
    fontSize: 15,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'left',
    lineHeight: 20,
    paddingHorizontal: 10,
  },
});
