import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import ProductImages from './ProductImages';

const Div = styled.View`
    width: 100%;
    flex-direction: row;
    align-items: center;
    margin-bottom: 15px;
    padding:10px;
    background-color: #fff;
    border-radius: 15px;
    flex-wrap: wrap;
    
`;
const DivContent = styled.View`
    align-items: flex-start;
    padding-bottom: 15px;
`;
const DivButton = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* padding-top: 10px; */
    /* padding-bottom: 10px; */
`;
const Texto = styled.Text`
    font-size: 14px;
    padding: 5px;
    padding-left: 10px;
    color: #212121;
`;
const TextoScore = styled.Text`
    font-size: 12px;
    padding: 5px;
    padding-left: 10px;
    color: #008B8B;
`;
const TextoPrice = styled.Text`
    font-size: 18px;
    padding: 5px;
    padding-left: 10px;
    font-weight: 900;
    color: #000;
`;
const Image = styled.Image`
    width: 80px;
    height: 100px;
`;

export default (props) => {
    return (

        <Div style={{
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 10,
            },
            shadowOpacity: 0.3,
            shadowRadius: 20,
            elevation: 15,
        }}>
            <Image source={ProductImages(props.data.image)} />
            <DivContent>
                <Texto>{props.data.name}</Texto>
                <TextoScore>Score: {props.data.score}</TextoScore>
                <TextoPrice>R$ {props.data.price}</TextoPrice>
            </DivContent>
            <DivButton>
                <Button
                    title="Adicionar ao carrinho"
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    onPress={props.addAction}
                />
                <Button
                    title="Comprar"
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    onPress={props.buyAction}
                />
            </DivButton>
        </Div>

    )
}
