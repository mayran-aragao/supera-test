import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StatusBar, FlatList } from 'react-native'
import products from '../../products.json'
import ProductList from '../../components/ProductsList'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import { useStateValue } from '../../contexts/StateContext'
import SnackBar from 'react-native-snackbar-component'
import {
    Container,
    Div,
    Texto
} from './Style'


const ShopScreen = ({ navigation }) => {
    const [visible, setVisible] = useState(false)
    const [showSnack, setShowSnack] = useState(false)
    const [list, setList] = useState(products)
    const [bgt, setBgt] = useState(false)
    const [ordem, setOrdem] = useState(false)
    const [filtro, setFiltro] = useState('')
    const [context, dispatch] = useStateValue()
    const [itensToBuy, setItensToBuy] = useState([])

    const handlePrice = (title) => {
        let newList = [...products]
        setVisible(!visible)
        setBgt(!bgt)
        setFiltro(title)
        if (bgt) {
            newList.sort((a, n) => (a.price > n.price ? 1 : n.price > a.price ? -1 : 0))
        } else {
            newList.sort((a, n) => (a.price > n.price ? -1 : n.price > a.price ? 1 : 0))
        }

        setList(newList)

    }
    const handleScore = (title) => {
        let newList = [...products]
        setVisible(!visible)
        setBgt(!bgt)
        setFiltro(title)
        if (bgt) {
            newList.sort((a, n) => (a.score > n.score ? 1 : n.score > a.score ? -1 : 0))
        } else {
            newList.sort((a, n) => (a.score > n.score ? -1 : n.score > a.score ? 1 : 0))
        }

        setList(newList)

    }
    const handleOrder = (title) => {
        let newList = [...products]
        setVisible(!visible)
        setOrdem(!ordem)
        setFiltro(title)
        if (ordem) {
            newList.sort((a, n) => (a.name > n.name ? 1 : n.name > a.name ? -1 : 0))
        } else {
            newList.sort((a, n) => (a.name > n.name ? -1 : n.name > a.name ? 1 : 0))
        }

        setList(newList)

    }

    const resetSnack = () => {
        setTimeout(()=>setShowSnack(false), 1500);
    }
    
    const addToCart = (product) => {
        let listProducts = [...itensToBuy]
        setShowSnack(true)

        if (listProducts != '') {
            let item = listProducts.filter(a => a.id == product.id)

            if (item.length > 0){
                item[0].quantidade = item[0].quantidade + 1
            } else {
                product.quantidade = 1
                listProducts.push(product)
            }
            setItensToBuy(listProducts)

        } else {
            product.quantidade = 1
            listProducts.push(product)
            setItensToBuy(listProducts)
        }
        dispatch({ type: 'setProductsList', payload: { product: listProducts } })
        resetSnack()
    }

    const goToCart = (product) => {
        let listProducts = [...itensToBuy]

        if (listProducts != '') {
            let item = listProducts.filter(a => a.id == product.id)

            if (item.length > 0){
                item[0].quantidade = item[0].quantidade + 1
            } else {
                product.quantidade = 1
                listProducts.push(product)
            }
            setItensToBuy(listProducts)

        } else {
            product.quantidade = 1
            listProducts.push(product)
            setItensToBuy(listProducts)
        }
        dispatch({ type: 'setProductsList', payload: { product: listProducts } })
        navigation.navigate('Cart',listProducts)
    }

    return (
        <Container>
            <StatusBar barStyle='dark-content' animated={true} backgroundColor="#f5f5f5" />
            <Div>
                <Texto>Nossos Produtos</Texto>
                <Button
                    title={filtro ? filtro : " "}
                    titleStyle={{ color: "#008B8B", fontSize: 13, paddingLeft: 5 }}
                    icon={<Material name="filter-menu-outline" size={22} color="#008B8B" />}
                    iconPosition="left"
                    type="clear"
                    onPress={() => setVisible(!visible)}
                />
            </Div>
            <FlatList
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: 45, padding: 10 }}
                data={list}
                renderItem={({ item }) =>
                    <ProductList
                        data={item}
                        addAction={() => addToCart(item)}
                        buyAction={() => goToCart(item)}

                    />
                }
                keyExtractor={item => item.id}
            />
            <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
                <Button
                    title="Preço"
                    type="clear"
                    titleStyle={{ color: "#008B8B", paddingLeft: 5 }}
                    icon={<Material name="cash" size={20} color="#008b8b" />}
                    onPress={() => handlePrice("PREÇO")}
                />
                <Button
                    title="Popularidade"
                    type="clear"
                    titleStyle={{ color: "#008B8B", paddingLeft: 5 }}
                    icon={<Material name="account-heart-outline" size={20} color="#008b8b" />}
                    onPress={() => handleScore("POPULAR.")}
                />
                <Button
                    title="Ordem Alfabetica"
                    type="clear"
                    titleStyle={{ color: "#008B8B", paddingLeft: 5  }}
                    icon={<Material name="order-alphabetical-ascending" size={20} color="#008b8b" />}
                    onPress={() => handleOrder("ALFABÉTICA")}
                />
                <Button
                    title="Remover Filtro"
                    type="outline"
                    titleStyle={{ color: "#DC143C", paddingLeft: 5 }}
                    icon={<Icon name="trash-outline" size={20} color="#DC143C" />}
                    buttonStyle={{ borderColor: "#DC143C" }}
                    onPress={() => { setVisible(!visible), setList(products), setFiltro('') }}
                />
            </Overlay>
            <SnackBar visible={showSnack} textMessage="Adicionado ao carrinho"  />
        </Container>
    )
}

export default ShopScreen