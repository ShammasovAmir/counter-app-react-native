import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import Button from './Button'
import MainNumber from './MainNumber'

const Box = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)

  const decrement = () => setCount(count - 1)

  return (
    <View style={styles.boxContainer}>
      <MainNumber>{count}</MainNumber>
      <View style={styles.buttonsContainer}>
        <Button mathFunction={decrement}>-</Button>
        <Button mathFunction={increment}>+</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxContainer: {
    backgroundColor: '#5ba0e7',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    minWidth: 200,
  },
})

export default Box
