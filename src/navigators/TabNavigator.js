import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopScreen from '../screens/ShopScreen/Index'

const Tab = createBottomTabNavigator()

const App = () => {
    return (

        <Tab.Navigator
            screenOptions={({route})=> ({
                tabBarIcon: ({focused, color, size}) => {
                    let iconName

                    if(route.name ==='Shop') {
                        iconName = focused ? "shopping" : "shopping-outline"
                    }
                    return <Material name = {iconName} size={size} color={color}/>;
                },
                tabBarActiveTintColor: '#008B8B',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Shop" component={ShopScreen} options={{
                headerShown:false
            }}/>
        </Tab.Navigator>
    )
}

export default App;