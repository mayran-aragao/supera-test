import React, { useState, useEffect } from 'react';
import { Button, Avatar } from 'react-native-elements';
import { StatusBar } from 'react-native'
import BuyComponent from '../../components/BuyComponent'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useStateValue } from '../../contexts/StateContext'
import {
    Container,
    Div,
    DivHeader

} from './Style'
import { checkForUpdateAsync } from 'expo-updates';


const ConfigScreen = ({ route, navigation }) => {
    // const [name, setName] = useState(JSON.parse(context.user.name))
    const [context, dispatch] = useStateValue()
    
    const logout = () => {
        dispatch({ type: 'delProductsList' })
        navigation.reset({
            index: 1,
            routes: [{ name: 'Entrace' }]
        })
    }
    return (
        <Container>
            <StatusBar barStyle='dark-content' animated={true} backgroundColor="#f5f5f5" />
            <DivHeader>
                <Avatar rounded size={150} title="US" containerStyle={{ backgroundColor: '#ccc' }} />
            </DivHeader>
            <Div>
                <Button title="Sair" type="outline" titleStyle={{color:'#ff0000'}} buttonStyle={{borderColor:"#ff0000"}} onPress={logout}/>

            </Div>
        </Container >
    )
}

export default ConfigScreen