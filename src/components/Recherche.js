import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Button, TextInput, ScrollView, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import ListeRestau from './ListeRestau';


class Recherche extends Component {

    state = {
        recherche: "",
        restaurants: []
    }

    render() {
        return(
            <KeyboardAwareScrollView>
                <View style={styles.content}>
                    <ScrollView>
                        <TextInput style={styles.input}
                            value = {this.state.recherche}
                            onChangeText={(recherche)=> this.setState({ recherche: recherche })}
                        />
                        <Pressable style={styles.button} onPress={this.filtre}>
                            <Text style={styles.textButton}>Rechercher</Text>
                        </Pressable>
                        <ListeRestau restaurants={this.state.restaurants}/>
                    </ScrollView>
                </View>
            </KeyboardAwareScrollView>
        );
    }

    filtre = () => this.setState({ restaurants: this.props.restaurants.filter(restaurant => restaurant.ville === this.state.recherche) })
    
}

const styles = StyleSheet.create({
    content: {
        marginTop:50,
        marginHorizontal:10
    },
    titreSection: {
        
        marginBottom:20,
        borderWidth:1,
        borderRadius:10,
        padding:10
        
    },
    titre: {
        fontSize:20,
        textAlign:'center',
        fontWeight:'bold'
    },
    alert: {
        color:'red',
        textAlign:'center',
        marginBottom:20
    },
    input: {
        padding: 2,
        margin:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    InputAdresse: {
        padding: 2,
        margin:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        height:60,
    },
    InputAvis: {
        padding: 2,
        margin:10,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
        height:100,
    },
    button: {
        backgroundColor:'blue',
        marginHorizontal:130,
        borderRadius:6,
        paddingVertical:10
    },
    textButton: {
        color:'white',
        textAlign:'center'
    }   
});

export default Recherche;