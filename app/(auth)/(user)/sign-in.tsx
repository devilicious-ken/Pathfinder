import { View, StyleSheet,Image, SafeAreaView, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.header}>
        <Image 
        style={styles.logo} 
        source={require('../../../assets/images/logo.png')}
        resizeMode='contain' /> 
      <Text style={styles.title}> Login </Text>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f1f1f',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  logo: {
    width: 309,
    height: 92,
    marginBottom: 100
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: '#fff',
  }
})
export default SignIn;