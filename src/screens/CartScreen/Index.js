import React, { useState, useEffect } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StatusBar, FlatList } from 'react-native'
import CartIcon from '../../assets/cart-icon.svg';
import products from '../../products.json'
import BuyComponent from '../../components/BuyComponent'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStateValue } from '../../contexts/StateContext'
import ProductImages from '../../components/ProductImages';
import {
    Container,
    Header,
    TextoHeader,
    Div,
    DivCheckout,
    DivValues,
    Label,
    ValueText
} from './Style'


const ShopScreen = ({ route, navigation }) => {
    // const [name, setName] = useState(JSON.parse(context.user.name))
    const [visible, setVisible] = useState(false)
    const [context, dispatch] = useStateValue()
    const [item, setItem] = useState(context.user?.productsList || [])
    const [subTotal, setSubTotal] = useState('')
    const [total, setTotal] = useState('')
    const [shipping, setShipping] = useState('')


    useEffect(() => {
        context.user.productsList ? setItem(context.user.productsList) : item

        let items = [...context.user.productsList]
        console.log('item', items)
        let quantidade = items.reduce((t,i)=>t + i.quantidade,0)
        console.log('quantidade', quantidade)
        let subtotal = items.reduce((t,i)=>t+(i.price*i.quantidade),0)
        console.log('subtotal ',subtotal)

        setSubTotal(subtotal)

        if (subtotal > 250){
            setShipping('Grátis')
            setTotal(subtotal)
        } else {
            let shippingValue = quantidade *10
            let total = shippingValue + subtotal
            setShipping(shippingValue)
            setTotal(total)
        }

    }, [context.user.productsList])

    const deleteItem = () => {
        
    }

    return (
        <Container>

            <Header>
                <Button
                    icon={<Material name="arrow-left" size={22} color="#008B8B" />}
                    iconPosition="left"
                    type="clear"
                    onPress={() => navigation.goBack()}
                />
                <TextoHeader>Seu carrinho</TextoHeader>
                <Button
                    icon={<Material name="filter-menu-outline" size={22} color="#008B8B" />}
                    iconPosition="left"
                    type="clear"
                    onPress={() => console.log(context.user.productsList)}
                />
            </Header>
            {item != '' &&
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
                                    addAction={() => addToCard(item)}
                                    buyAction={() => goToCard(item)}

                                />
                            }
                            keyExtractor={item => item.id}
                        />
                    </Div>
                    <DivCheckout>
                        <Label>
                            SubTotal
                        </Label>
                        <DivValues>
                            <ValueText>R$</ValueText>
                            <ValueText>{subTotal}</ValueText>
                        </DivValues>
                        <Label>
                            Frete
                        </Label>
                        <DivValues>
                            <ValueText>R$</ValueText>
                            <ValueText>{shipping}</ValueText>
                        </DivValues>
                        <Label>
                            Total
                        </Label>
                        <DivValues>
                            <ValueText>R$</ValueText>
                            <ValueText>{total}</ValueText>
                        </DivValues>
                    </DivCheckout>
                </>
            }

        </Container>
    )
}

export default ShopScreen