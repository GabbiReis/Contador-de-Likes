import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { StackTypes } from '../../routes/stack';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';



const Contador = () => {

    const [nome, setNome] = useState<string>('');
    const [contadorLikes, setContadorLikes] = React.useState<number>(0);
    const incrementarContador = () => setContadorLikes(contadorLikes + 1);
    const deslikeContador = () => setContadorLikes(contadorLikes - 1);

    const navigation = useNavigation<StackTypes>();

    const handleContador = () => {
      navigation.navigate('Home');

    };



  return (
    <View style={styles.container}>
      <TextInput 
      style={styles.input}
      placeholder='Digite seu Nome'
      onChangeText={setNome}
      value={nome}
      />
      <Text style={styles.greeting}>
        Olá {nome}, seu total de Likes/Deslikes é {contadorLikes}
      </Text>
      <Button title="Like" onPress={incrementarContador} color="blue" />
      <Button title="Deslike" onPress={deslikeContador} color="blue" />
    </View>
  );


}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default Contador;
