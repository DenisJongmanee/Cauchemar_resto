import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Restaurant from './Restau'

const ListeRestau = ({ restaurants }) => (
  <ScrollView style={styles.list}>
    {restaurants.map(restaurant => (
      <Restaurant key={restaurant.id} restaurant={restaurant}   />
    ))}
  </ScrollView>
)

const styles = StyleSheet.create({
  list: {
    margin:10
  }
})

export default ListeRestau
