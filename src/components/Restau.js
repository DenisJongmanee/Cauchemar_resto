import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  TouchableHighlight,
  Image
} from 'react-native'

class Restaurant extends Component {
  state={
    restau:this.props.restaurant
  }
  render() {
    const {restau} = this.state;
    return (

      <View style={styles.restau}>
            <Image style={styles.image} source={restau.image}/>

            <Text>{restau.titre}{"\n"}
            {restau.description}</Text>

            

      </View>
      
    )
  }
}

const styles = StyleSheet.create({
  restau: {
    padding: 10,
    borderTopWidth: 1,
    borderStyle: 'solid',
    borderColor: 'lightgray',
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width:180,
    height:100
  }
})

export default Restaurant
