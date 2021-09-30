import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import ShopScreen from '../screens/ShopScreen/Index'
import CartScreen from '../screens/CartScreen/Index'

const Tab = createBottomTabNavigator()

const App = () => {
    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarShowLabel: false,
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName

                    if (route.name === 'Shop') {
                        iconName = focused ? "shopping" : "shopping-outline"
                    }
                    if (route.name === 'Cart') {
                        iconName = focused ? "cart" : "cart-outline"
                    }
                    return <Material name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#008B8B',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
        </Tab.Navigator>
    )
}

export default App;