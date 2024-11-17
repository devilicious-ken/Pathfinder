import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Onboarding = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Image 
        style={styles.logo} 
        source={require('../../assets/images/logo.png')}
        resizeMode='contain' /> 
        <Text style={styles.tagline}>Your search for the next dream job is over 🚀</Text>
      </View>

      {/* Start Searching Button */}
      <TouchableOpacity 
      onPress={()=>{router.replace('/sign-in')}}
      style={styles.searchButton}
      >
        <Text style={styles.searchButtonText}>Start Searching →</Text>
      </TouchableOpacity>

      {/* Brand Image Section */}
      <Image
        source={require('../../assets/images/onboarding.png')} // Replace with the correct relative path
        style={styles.brandImage}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: 40,
    alignItems: 'center',
  },
  logo: {
    width: 309,
    height: 92,
  },
  tagline: {
    color: '#fff',
    fontSize: 38,
    textAlign: 'center',
    marginLeft: 45,
    marginRight: 45,
    marginTop: 50,
  },
  searchButton: {
    width: '80%',
    backgroundColor: '#5424FD',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center'
  },
  searchButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  brandImage: {
    width: '100%',
    height: 380,

  },
});

export default Onboarding;
