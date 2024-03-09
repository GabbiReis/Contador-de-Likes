import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import { StackTypes } from '../../routes/stack';

const Login = () => {
    const [login, setLogin] = useState<string>('');
    const [password, setPassword] = useState<String>('');
  
    const navigation = useNavigation<StackTypes>();

    const handleLogin = () => {
      navigation.navigate('Home');

    };
    
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o login"
          onChangeText={setLogin}
          value={login}
        />
        <TextInput
          style={styles.input}
          placeholder="Digite a Senha"
          secureTextEntry={true}
          onChangeText={setPassword}
          value={password as string}
        />
        

         <TouchableOpacity onPress={handleLogin} style={styles.button} activeOpacity={0.1}>
        <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity>
        <Text>Esqueceu a senha?</Text>
        </TouchableOpacity>
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
    input: {
      width: '80%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 20,
      paddingHorizontal: 10,
    },
    button: {
        width: '80%',
        height: 40,
        borderRadius: 8,
        backgroundColor: '#f8ff00',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#f8ff00',
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      }
  });
  

export default Login;