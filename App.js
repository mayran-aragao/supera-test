import React from "react";
import MainStack from './src/navigators/MainStack'
import { StateProvider } from './src/contexts/StateContext'
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from 'react-native'

export default () => (

    <StateProvider>
        <SafeAreaProvider>
            <StatusBar barStyle='dark-content' animated={true} backgroundColor="#f5f5f5" />
            <MainStack />
        </SafeAreaProvider>
    </StateProvider>
)