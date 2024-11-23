import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = {}

const onboarding = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image 
        style={styles.logo} 
        source={require('../../assets/images/logo.png')}
        resizeMode='contain' /> 
        <Text style={styles.tagline}>Are you an Employer or an Employee?</Text>
      </View>

      <TouchableOpacity 
      onPress={()=>{router.replace('/(user)/welcome')}}
      style={styles.searchButton}
      >
        <Text style={styles.searchButtonText}>Employee</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      onPress={()=>{router.replace('/sign-in')}}
      style={styles.searchButton}
      >
      <Text style={styles.searchButtonText}>Employer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

export default onboarding

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1f1f1f',
        alignItems: 'center',
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
        marginTop: 80,
        marginBottom: 80
      },
      searchButton: {
        width: '80%',
        backgroundColor: '#5424FD',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 25,
        alignItems: 'center',
        marginBottom: 50
      },
      searchButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
      },
})