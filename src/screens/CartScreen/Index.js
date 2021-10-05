import React, { useState, useEffect } from 'react';
import { Button } from 'react-native-elements';
import { FlatList, StatusBar } from 'react-native'
import BuyComponent from '../../components/BuyComponent'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Alerta from 'react-native-awesome-alerts';
import { useStateValue } from '../../contexts/StateContext'
import {
    Container,
    TextoHeader,
    Header,
    Div,
    DivCheckout,
    DivValues,
    Label,
    ValueText,
    DivImage,
    DivLabel,
    DivBack
} from './Style'
import { checkForUpdateAsync } from 'expo-updates';


const ShopScreen = ({ route, navigation }) => {
    // const [name, setName] = useState(JSON.parse(context.user.name))
    const [visible, setVisible] = useState(false)
    const [context, dispatch] = useStateValue()
    const [item, setItem] = useState(context.user?.productsList || [])
    const [subTotal, setSubTotal] = useState('')
    const [total, setTotal] = useState('')
    const [shipping, setShipping] = useState('')
    const [quantidade, setQuantidade] = useState('')
    const [showAlert, setShowAlert] = useState(false);


    useEffect(() => {
        context.user.productsList ? setItem(context.user.productsList) : item

        let items = [...context.user.productsList]
        let quantidade = items.reduce((t, i) => t + i.quantidade, 0)
        let subtotal = items.reduce((t, i) => t + (i.price * i.quantidade), 0)

        setSubTotal(subtotal)
        quantidade > 1 ? setQuantidade(`Finalizar Compra (${quantidade} itens)`) : setQuantidade(`Finalizar Compra (${quantidade} item)`)

        if (subtotal > 250) {
            setShipping('Grátis')
            setTotal(subtotal)
        } else {
            let shippingValue = quantidade * 10
            let total = shippingValue + subtotal
            setShipping(shippingValue)
            setTotal(total)
        }

    }, [context.user.productsList])

    const deleteItem = (product) => {
        let items = [...context.user.productsList]

        if (product.quantidade == 1) {
            items = items.filter(a => a.id != product.id)
            return dispatch({ type: 'setProductsList', payload: { product: items } })
        }
        newProduct = items.filter(a => a.id == product.id).map(b => {
            b.quantidade -= 1
            return b
        })
        return dispatch({ type: 'setProductsList', payload: { product: items } })

    }

    const finishShopping = () => {
        dispatch({ type: 'delProductsList' })
        navigation.goBack()
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content' animated={true} backgroundColor="#f5f5f5" />
            <Header>
                <Button
                    icon={<Material name="arrow-left" size={22} color="#008B8B" />}
                    iconPosition="left"
                    type="clear"
                    onPress={() => navigation.goBack()}
                />
                <TextoHeader>{context.user.name}, Seu carrinho</TextoHeader>
                <Button
                    type="clear"
                    onPress={() => console.log(context.user.productsList)}
                />
            </Header>
            {item == '' &&
                < DivImage >
                    <Material name="cart-outline" size={100} color="#008B8B" />
                    <TextoHeader>Carrinho vazio</TextoHeader>
                </DivImage>
            }
            {
                item != '' &&
                <>
                    <Div
                        style={{
                            shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 10,
                            },
                            shadowOpacity: 0.3,
                            shadowRadius: 20,
                            elevation: 15,
                        }}
                    >
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingTop: 20, padding: 10 }}
                            data={item}
                            renderItem={({ item }) =>
                                <BuyComponent
                                    data={item}
                                    delAction={() => deleteItem(item)}

                                />
                            }
                            keyExtractor={item => item.id}
                        />
                    </Div>
                    <DivCheckout>
                        <DivBack>
                            <DivLabel>
                                <Material name="cash" size={15} color="#008B8B" />
                                <Label>
                                    Subtotal
                                </Label>
                            </DivLabel>
                            <DivValues>
                                <ValueText>R$</ValueText>
                                <ValueText>{parseFloat(subTotal).toFixed(2)}</ValueText>
                            </DivValues>
                            <DivLabel>
                                <Material name="truck-fast-outline" size={15} color="#008B8B" />
                                <Label>
                                    Frete
                                </Label>
                            </DivLabel>
                            <DivValues>
                                {shipping != "Grátis" &&
                                    <ValueText>R$</ValueText>
                                }
                                <ValueText>{shipping}</ValueText>
                            </DivValues>
                            <DivLabel>
                                <Material name="cash" size={15} color="#008B8B" />
                                <Label>
                                    Total
                                </Label>
                            </DivLabel>
                            <DivValues>
                                <ValueText>R$</ValueText>
                                <ValueText>{parseFloat(total).toFixed(2)}</ValueText>
                            </DivValues>
                        </DivBack>
                    </DivCheckout>
                    <Button
                        title={quantidade}
                        titleProps
                        titleStyle={{ paddingLeft: 10 }}
                        icon={<MaterialIcons name="done" size={22} color="white" />}
                        buttonStyle={{ backgroundColor: "#008B8B" }}
                        onPress={() => setShowAlert(true)}
                    />
                </>
            }

            {
                showAlert &&
                <Alerta
                    show={showAlert}
                    showProgress={false}
                    title="Aviso!"
                    message="Finalizar compra?"
                    closeOnTouchOutside={true}
                    closeOnHardwareBackPress={false}
                    showCancelButton={true}
                    showConfirmButton={true}
                    confirmText="Finalizar"
                    confirmButtonColor="#008B8B"
                    cancelText="Cancelar"
                    cancelButtonColor="#ff0000"
                    onCancelPressed={() => setShowAlert(false)}
                    onConfirmPressed={finishShopping}
                    contentContainerStyle={{ width: "100%" }}
                    actionContainerStyle={{ justifyContent: "space-around" }}
                    cancelButtonStyle={{ height: 35, width: "100%", justifyContent: 'center', alignItems: "center" }}
                    confirmButtonStyle={{ height: 35, width: "100%", justifyContent: 'center', alignItems: "center" }}
                />
            }

        </Container >
    )
}

export default ShopScreen