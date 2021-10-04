import React from 'react';
import { Button, Avatar } from 'react-native-elements';
import { StatusBar } from 'react-native'
import { useStateValue } from '../../contexts/StateContext'
import {
    Container,
    Div,
    DivHeader

} from './Style'


const ConfigScreen = ({navigation }) => {
    const [context, dispatch] = useStateValue()
    
    const logout = () => {
        dispatch({ type: 'delProductsList' })
        navigation.reset({
            index: 1,
            routes: [{ name: 'Entrace' }]
        })
    }
    let name = context.user.name
    return (
        <Container>
            <StatusBar barStyle='dark-content' animated={true} backgroundColor="#f5f5f5" />
            <DivHeader>
                <Avatar rounded size={150} title={name.substring(0,2)} containerStyle={{ backgroundColor: '#ccc' }} />
            </DivHeader>
            <Div>
                <Button title="Sair" type="outline" titleStyle={{color:'#ff0000'}} buttonStyle={{borderColor:"#ff0000"}} onPress={logout}/>

            </Div>
        </Container >
    )
}

export default ConfigScreen