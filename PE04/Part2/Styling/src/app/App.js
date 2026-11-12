
import React, { useState } from 'react';

import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  SafeAreaView,
} from 'react-native';

// Profile image from the assets folder
const userImage = require('../../assets/images/user.png');

// Data for six profile cards
const profiles = [
  {
    id: 1,
    name: 'John Doe',
    occupation: 'React Native Developer',
    description:
      'John is a great JavaScript developer. He enjoys building React Native applications for iOS and Android.',
  },
  {
    id: 2,
    name: 'Jane Smith',
    occupation: 'UI/UX Designer',
    description:
      'Jane designs creative and user-friendly mobile application interfaces.',
  },
  {
    id: 3,
    name: 'Michael Brown',
    occupation: 'Software Engineer',
    description:
      'Michael enjoys programming and developing useful software solutions.',
  },
  {
    id: 4,
    name: 'Emily Davis',
    occupation: 'Web Developer',
    description:
      'Emily builds responsive websites using modern web technologies.',
  },
  {
    id: 5,
    name: 'David Wilson',
    occupation: 'Mobile App Developer',
    description:
      'David develops mobile applications using React Native and JavaScript.',
  },
  {
    id: 6,
    name: 'Sarah Johnson',
    occupation: 'Full Stack Developer',
    description:
      'Sarah works with both frontend and backend technologies to create applications.',
  },
];

// Reusable profile card component
function ProfileCard({ profile, expanded, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      accessibilityRole="button"
      accessibilityLabel={`${expanded ? 'Collapse' : 'Expand'} ${profile.name}`}
      style={[
        styles.cardContainer,
        expanded
          ? styles.expandedCard
          : styles.thumbnailCard,
      ]}
    >
      {/* Circular profile image */}
      <View
        style={[
          styles.cardImageContainer,
          expanded
            ? styles.expandedImageContainer
            : styles.thumbnailImageContainer,
        ]}
      >
        <Image
          source={userImage}
          style={
            expanded
              ? styles.expandedImage
              : styles.thumbnailImage
          }
        />
      </View>

      {/* Profile name */}
      <Text
        style={[
          styles.cardName,
          expanded
            ? styles.expandedName
            : styles.thumbnailName,
        ]}
        numberOfLines={expanded ? 2 : 1}
      >
        {profile.name}
      </Text>

      {/* Occupation */}
      <Text
        style={[
          styles.cardOccupation,
          expanded
            ? styles.expandedOccupation
            : styles.thumbnailOccupation,
        ]}
        numberOfLines={expanded ? 2 : 1}
      >
        {profile.occupation}
      </Text>

      {/* Divider */}
      <View style={styles.divider} />

      {/* Description */}
      {expanded ? (
        <Text style={styles.cardDescription}>
          {profile.description}
        </Text>
      ) : (
        <Text style={styles.thumbnailDescription}>
          Tap to expand
        </Text>
      )}
    </TouchableOpacity>
  );
}

// Main application
export default function App() {
  const [expandedId, setExpandedId] = useState(null);

  // Toggle selected profile
  const handleProfileCardPress = (id) => {
    setExpandedId((previousId) =>
      previousId === id ? null : id
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
      >
        <Text style={styles.heading}>
          Profile Cards Gallery
        </Text>

        <Text style={styles.instructions}>
          Tap any profile card to expand or collapse it.
        </Text>

        {/* Flexbox gallery containing six cards */}
        <View style={styles.gallery}>
          {profiles.map((profile) => (
            <ProfileCard
              key={profile.id}
              profile={profile}
              expanded={expandedId === profile.id}
              onPress={() =>
                handleProfileCardPress(profile.id)
              }
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Application styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 10,
  },

  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#222222',
    marginBottom: 10,
    textAlign: 'center',
  },

  instructions: {
    fontSize: 14,
    color: '#555555',
    marginBottom: 20,
    textAlign: 'center',
  },

  gallery: {
    width: '100%',
    maxWidth: 500,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },

  cardContainer: {
    backgroundColor: 'dodgerblue',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 18,
    alignItems: 'center',
    margin: 8,

    ...Platform.select({
      ios: {
        shadowColor: '#000000',
        shadowOffset: {
          width: 5,
          height: 8,
        },
        shadowOpacity: 0.4,
        shadowRadius: 5,
      },
      android: {
        elevation: 10,
      },
      default: {
        elevation: 5,
      },
    }),
  },

  // Small thumbnail card
  thumbnailCard: {
    width: 125,
    height: 175,
    padding: 8,
  },

  // Expanded profile card
  expandedCard: {
    width: 210,
    height: 310,
    padding: 12,
  },

  cardImageContainer: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  thumbnailImageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginTop: 8,
  },

  expandedImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginTop: 12,
  },

  thumbnailImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },

  expandedImage: {
    width: 70,
    height: 70,
    resizeMode: 'contain',
  },

  cardName: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  thumbnailName: {
    fontSize: 11,
    marginTop: 9,
  },

  expandedName: {
    fontSize: 19,
    marginTop: 16,
  },

  cardOccupation: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
  },

  thumbnailOccupation: {
    fontSize: 8,
    marginTop: 4,
  },

  expandedOccupation: {
    fontSize: 12,
    marginTop: 8,
  },

  divider: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    marginVertical: 8,
  },

  cardDescription: {
    fontSize: 12,
    color: 'black',
    fontStyle: 'italic',
    textAlign: 'left',
    lineHeight: 17,
    paddingHorizontal: 4,
  },

  thumbnailDescription: {
    fontSize: 9,
    color: '#222222',
    fontStyle: 'italic',
    textAlign: 'center',
  },
});
