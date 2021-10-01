import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import ShopScreen from '../screens/ShopScreen/Index'
import CartScreen from '../screens/CartScreen/Index'
import ConfigScreen from '../screens/ConfigScreen/Index'

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
                    if (route.name === 'Config') {
                        iconName = focused ? "account-settings" : "account-settings-outline"
                    }
                    return <Material name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#008B8B',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Shop" component={ShopScreen} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Config" component={ConfigScreen} />
        </Tab.Navigator>
    )
}

export default App;