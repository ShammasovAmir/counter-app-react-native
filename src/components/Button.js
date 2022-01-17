import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import MainNumber from './MainNumber'

const Button = ({ children, mathFunction }) => {
  return (
    <TouchableHighlight underlayColor="#5ba0e7" onPress={mathFunction}>
      <View style={styles.buttonContainer}>
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#5193d5',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    width: 80,
    height: 80,
  },
  text: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',
  },
})

export default Button
