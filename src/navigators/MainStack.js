import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Tabnavigator from './TabNavigator'
import EntraceScreen from '../screens/EntraceScreen/Index'

const Stack = createNativeStackNavigator()

const App = () => {

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Entrace" component={EntraceScreen} options={{
                    headerShown: false
                }}/>
                {/* <Stack.Screen name="Tab" component={Tabnavigator} options={{
                    headerShown:false
                }} /> */}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App;