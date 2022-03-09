import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Restaurant from './Restau'

const ListeRestau = ({ restaurants }) => (
  <View style={styles.list}>
    {restaurants.map(restaurant => (
      <Restaurant key={restaurant.id} restaurant={restaurant}   />
    ))}
  </View>
)

const styles = StyleSheet.create({
  list: {
    margin:10
  }
})

export default ListeRestau
