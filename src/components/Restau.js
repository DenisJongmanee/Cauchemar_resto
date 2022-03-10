import React, { Component, Fragment } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
class Restaurant extends Component {
  state={
    restau:this.props.restaurant
  }
  render() {
    console.log(this.props)
    const {restau} = this.state;
    return (
      <View style={styles.restau} >
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('DetailsRestau')}>
          <text>text</text>
        </TouchableOpacity>
        <Image style={styles.image} source={restau.image} onPress={()=> this.props.navigation.navigate('DetailsRestau')}/>
        <View style={styles.text}>
          <View>
            <Text style={styles.titre}>{restau.titre}</Text>
          </View>
          <View style={styles.note}>
            <MaterialCommunityIcons name="star-outline" color={"red"} size={25}/>
            <Text>{restau.note}/5</Text>
          </View>
          <View style={styles.description}>
            <Text>{restau.description}</Text>
          </View>
        </View>
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
  },
  text: {
    marginLeft:10
  },
  titre: {
    fontWeight:'bold'
  },
  description: {
    marginRight:170
  },
  note: {
    flexDirection:'row',
    alignItems: 'center'
  }
})

export default Restaurant
