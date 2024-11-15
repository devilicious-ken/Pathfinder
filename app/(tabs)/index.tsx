import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LoginForm from '@/components/LoginForm'

type Props = {}

const index = (props: Props) => {
  return (
    <View>
      <Text>index</Text>
      <LoginForm />
    </View>
  )
}

export default index

const styles = StyleSheet.create({})