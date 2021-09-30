import React, { useState } from 'react';
import { Input, Button } from 'react-native-elements';
import { ScrollView, StatusBar } from 'react-native'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Alerta from 'react-native-awesome-alerts';
import { useStateValue } from '../../contexts/StateContext'
import {
    Container,
    Div,
    Header, Texto,

} from './Style'


const ShopScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [showAlert, setShowAlert] = useState(false);
    const [error, setError] = useState('');
    const [context, dispatch] = useStateValue()

    const NextScreen = () => {
        if (!name) {
            setError("Você precisa digitar um nome")
            setShowAlert(true)
        } else {
            dispatch({ type: 'setName', payload: { name: name } })
            navigation.reset({
                index: 1,
                routes: [{ name: 'Tab' }]
            })
        }
    }

    return (
        <ScrollView contentContainerStyle={{ flex: 1 }} scrollEnabled={false} keyboardDismissMode='on-drag' keyboardShouldPersistTaps='handled'>
            <Container>
                <StatusBar barStyle={Platform.OS == 'ios' ? 'dark-content' : 'dark-content'} animated={true} backgroundColor="#F5F5F5" />
                <Header>
                    <Material name="store-outline" size={80} color="#008B8B"></Material>
                    <Texto>Supera's shop</Texto>
                </Header>
                <Div>
                    <Input
                        placeholder="Insira seu nome"
                        leftIcon={<Ionicons name="person"
                            color="grey"></Ionicons>}
                        containerStyle={{ padding: 20 }}
                        onChangeText={(e) => setName(e)}
                    />
                    <Button
                        title="Entrar"
                        type="solid"
                        containerStyle={{ width: "50%" }}
                        onPress={NextScreen}
                        buttonStyle={{ borderColor: "#008B8B", backgroundColor: "#008B8B" }}
                        titleStyle={{ color: "#fff" }}
                    />
                </Div>
                {
                    showAlert &&
                    <Alerta
                        show={showAlert}
                        showProgress={false}
                        title="Aviso!"
                        message={error}
                        closeOnTouchOutside={true}
                        closeOnHardwareBackPress={false}
                        showCancelButton={false}
                        showConfirmButton={true}
                        confirmText="OK"
                        confirmButtonColor="#008B8B"
                        onCancelPressed={() => setShowAlert(false)}
                        onConfirmPressed={() => setShowAlert(false)}
                        contentContainerStyle={{ width: "100%" }}
                        actionContainerStyle={{ justifyContent: "space-around" }}
                        cancelButtonStyle={{ height: 35, width: "100%", justifyContent: 'center', alignItems: "center" }}
                        confirmButtonStyle={{ height: 35, width: "100%", justifyContent: 'center', alignItems: "center" }}
                    />
                }
            </Container>
        </ScrollView>
    )
}

export default ShopScreen