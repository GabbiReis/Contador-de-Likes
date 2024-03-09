import * as React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import Contador from '../screens/Contador';

const Stack = createNativeStackNavigator();



type StackNavigation = {
    Home : undefined;
    Login : undefined;
    Contador: undefined;
}


export type StackTypes = NativeStackNavigationProp<StackNavigation>



export default function StackComponent(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen  name="Home" component={Home} />
                <Stack.Screen  name="Login" component={Login} />
                <Stack.Screen  name="Contador" component={Contador}
        />
        
            </Stack.Navigator>
        </NavigationContainer>

    );
}