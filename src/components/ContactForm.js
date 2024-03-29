import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, TextInput, ScrollView, Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

class ContactForm extends Component {

    state = {
        mail: "",
        nom: "",
        prenom: "",
        nomResto: "",
        adresse: "",
        avis:"", 
        message: ""
    }

    render() {
        return(
            <KeyboardAwareScrollView>
                <ScrollView style={styles.content}>
                    <View style={styles.titreSection}>
                        <Text style={styles.titre}>Vous voulez nous partager un bon restaurant que vous déconseilleriez ?</Text>
                    </View>
                    <Text style={styles.alert}>
                        {this.state.message}
                    </Text>
                    <View>
                        <Text>Adresse mail :</Text>
                        <TextInput style={styles.input}
                            value = {this.state.mail}
                            onChangeText={(mail)=> this.setState({ mail: mail })} 
                        />
                    </View>
                    <View>
                        <Text>Nom :</Text>
                        <TextInput style={styles.input}
                            value = {this.state.nom}
                            onChangeText={(nom)=> this.setState({ nom: nom })} 
                        />
                    </View> 
                    <View>
                        <Text>Prénom :</Text>
                        <TextInput style={styles.input}
                            value = {this.state.prenom}
                            onChangeText={(prenom)=> this.setState({ prenom: prenom })} 
                        />
                    </View>
                    <View>
                        <Text>Nom du restaurant :</Text>
                        <TextInput style={styles.input}
                            value = {this.state.nomResto}
                            onChangeText={(nomResto)=> this.setState({ nomResto: nomResto })} 
                        />
                    </View>
                    <View>
                        <Text>Adresse du restaurant :</Text>
                        <TextInput style={styles.InputAdresse}
                            multiline={true}
                            numberOfLines={3}
                            value = {this.state.adresse}
                            onChangeText={(adresse)=> this.setState({ adresse: adresse })} 
                        />
                    </View>
                    <View>
                        <Text>Pourquoi n'avez-vous pas aimé ?</Text>
                        <TextInput style={styles.InputAvis}
                            multiline={true}
                            numberOfLines={5}
                            value = {this.state.avis}
                            onChangeText={(avis)=> this.setState({ avis: avis })} 
                        />
                    </View>
                    <Pressable style={styles.button} onPress={this.verification}>
                        <Text style={styles.textButton}>Envoyer</Text>
                    </Pressable>
                </ScrollView>
            </KeyboardAwareScrollView>
        );
    }

    verification = () => {
        if (this.state.mail === "" || this.state.nom === "" || this.state.prenom === "" || this.state.nomResto === "" || this.state.adresse === "" || this.state.avis === "") {
            this.setState({message : "Champ(s) manquant(s)"})
        } else if(this.checkMail(this.state.mail)) {
            this.setState({message : "Mauvais format du mail"});
        } else {
            this.setState({message: "Le message a été envoyé. Merci de votre contribution"});
            this.clearInput();

        }
    }

    checkMail = (mail) => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
        return regex.test(mail) === false;
    }

    clearInput = () => {
        this.setState({mail: ""});
        this.setState({nom: ""});
        this.setState({prenom: ""});
        this.setState({nomResto: ""});
        this.setState({adresse: ""});
        this.setState({avis: ""});
    }


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

export default ContactForm;