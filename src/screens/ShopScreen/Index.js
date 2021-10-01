import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StatusBar, FlatList } from 'react-native'
import CartIcon from '../../assets/cart-icon.svg';
import products from '../../products.json'
import ProductList from '../../components/ProductsList'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import { useStateValue } from '../../contexts/StateContext'
import SnackBar from 'react-native-snackbar-component'
import {
    Container,
    Div,
    Header, Texto
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
            {/* <Header>
                <Button
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    icon={<CartIcon width={35} height={35} />}
                />
            </Header> */}
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
                    titleStyle={{ color: "#008B8B" }}
                    onPress={() => handlePrice("PREÇO")}
                />
                <Button
                    title="Popularidade"
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    onPress={() => handleScore("POPULAR.")}
                />
                <Button
                    title="Ordem Alfabetica"
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    onPress={() => handleOrder("ALFABÉTICA")}
                />
                <Button
                    title="Remover Filtro"
                    type="outline"
                    titleStyle={{ color: "#DC143C" }}
                    buttonStyle={{ borderColor: "#DC143C" }}
                    onPress={() => { setVisible(!visible), setList(products), setFiltro('') }}
                />
            </Overlay>
            <SnackBar visible={showSnack} textMessage="Adicionado ao carrinho"  />
        </Container>
    )
}

export default ShopScreen