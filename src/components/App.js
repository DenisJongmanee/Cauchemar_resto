// src/components/App.js
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

import ContactForm from './ContactForm';

class App extends Component {

    render() {
        return(
            <View>
                <ContactForm />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25
    }
});


export default App;