import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { StackTypes } from '../../routes/stack';

const Home = () => {

    const navigation = useNavigation<StackTypes>();

return (
    <View style={styles.container}>
        <Text style={styles.title}>Bem vindo(a)</Text>
        <Text>Estou na Home</Text>

        
        <Button  title='Fazer Login' onPress={() => {  navigation.navigate("Login"); } } />
        <Button  title='Contador de Likes' onPress={() => {  navigation.navigate("Contador");}} />
    </View>

);

};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 30,
        marginBottom: 20,
    },
    Button: {
        width: '80%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#f8ff00',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f8ff00',
      },
});

export default Home;