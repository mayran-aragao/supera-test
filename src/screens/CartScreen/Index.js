import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StatusBar, FlatList } from 'react-native'
import CartIcon from '../../assets/cart-icon.svg';
import products from '../../products.json'
import ProductList from '../../components/ProductsList'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStateValue } from '../../contexts/StateContext'
import {
    Container,
    Div,
    Header, Texto
} from './Style'


const ShopScreen = ({route, navigation}) => {
    // const [name, setName] = useState(JSON.parse(context.user.name))
    const [visible, setVisible] = useState(false)
    const [list, setList] = useState(products)
    const [bgt, setBgt] = useState(false)
    const [ordem, setOrdem] = useState(false)
    const [filtro, setFiltro] = useState('')
    const [context, dispatch] = useStateValue()



    const item = route.params

    return (
        <Container>
            <StatusBar barStyle='dark-content' animated={true} backgroundColor="#F5F5F5" />
           
            <Div>
                <Texto>{context.user.name}, seu carrinho</Texto>
                <Button
                    title={filtro ? filtro : " "}
                    titleStyle={{ color: "#008B8B", fontSize: 13, paddingLeft: 5 }}
                    icon={<Material name="filter-menu-outline" size={22} color="#008B8B" />}
                    iconPosition="left"
                    type="clear"
                    onPress={() => console.log(context.user.productsList)}
                />
            </Div>
            
        </Container>
    )
}

export default ShopScreen