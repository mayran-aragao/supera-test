import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';
import { StatusBar, FlatList } from 'react-native'
import CartIcon from '../../assets/cart-icon.svg';
import products from '../../products.json'
import ProductList from '../../components/ProductsList'
import Material from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    Container,
    Div,
    Header, Texto
} from './Style'


const ShopScreen = () => {
    const [visible, setVisible] = useState(false)
    const [list, setList] = useState(products)
    const [bgt, setBgt] = useState(false)
    const [ordem, setOrdem] = useState(false)
    const [filtro, setFiltro] = useState('')

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

    return (
        <Container>
            <StatusBar barStyle={Platform.OS == 'ios' ? 'dark-content' : 'dark-content'} animated={true} backgroundColor="#F5F5F5" />
            <Header>
                <Button
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    icon={<CartIcon width={35} height={35} />}
                />
            </Header>
            <Div>
                <Texto>Nossos Produtos</Texto>
                <Button
                    title={filtro ? filtro : " "}
                    titleStyle={{color:"#008B8B", fontSize:13, paddingLeft:5}}
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
                        addAction={() => addToCard(item)}
                        buyAction={() => goToCard(item)}

                    />
                }
                keyExtractor={item => item.id}
            />
            <Overlay isVisible={visible} onBackdropPress={() => setVisible(!visible)}>
                <Button title="Preço" type="clear" titleStyle={{ color: "#008B8B" }} onPress={() => handlePrice("PREÇO")} />
                <Button title="Popularidade" type="clear" titleStyle={{ color: "#008B8B" }} onPress={() => setVisible(!visible)} />
                <Button title="Ordem Alfabetica" type="clear" titleStyle={{ color: "#008B8B" }} onPress={() => handleOrder} />
            </Overlay>
        </Container>
    )
}

export default ShopScreen