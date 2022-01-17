import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const MainNumber = ({ children }) => {
  return (
    <View>
      <Text style={styles.number}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  number: {
    color: '#2968b1',
    fontSize: 100,
    fontWeight: '100',
  },
})

export default MainNumber
