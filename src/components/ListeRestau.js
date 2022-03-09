import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Restaurant from './Restau'

const ListeRestau = ({ restaurants }) => (
  <View style={styles.todoList}>
    {restaurants.map(restaurant => (
      <Restaurant key={restaurant.id} restaurant={restaurant}   />
    ))}
  </View>
)

const styles = StyleSheet.create({
  todoList: {
    flex: 1,
    alignItems: 'stretch'
  }
})

export default ListeRestau
