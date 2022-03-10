
import React, { Component, Fragment } from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import Restaurant from './Restau'
class ListeRestau extends Component {
  render(){
    console.log(this.props)
    return(
      <ScrollView style={styles.list}>
    {this.props.restaurants.map(restaurant => (
      <Restaurant key={restaurant.id} restaurant={restaurant}   />
    ))}
  </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  list: {
    margin:10
  }
})

export default ListeRestau
