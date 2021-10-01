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
    justify-content: space-between;
    margin-bottom: 10px;
`;
const DivContent = styled.View`
    width: 50%;
    padding-bottom: 15px;
`;

const Texto = styled.Text`
    font-size: 14px;
    color: #212121;
`;
const TextoPrice = styled.Text`
    font-size: 18px;
    font-weight: 900;
    color: #000;
`;
const Image = styled.Image`
    width: 80px;
    height: 80px;
`;

export default (props) => {
    return (

        <Div>
            <Image source={ProductImages(props.data.image)} />
            <DivContent>
                <Texto>{props.data.name}</Texto>
                <Texto>Qtd: {props.data.quantidade}</Texto>
                <TextoPrice>R$ {props.data.price}</TextoPrice>
            </DivContent>
                <Button
                    type="clear"
                    titleStyle={{ color: "#008B8B" }}
                    icon={<Icon name="trash-outline" size={20} color="#ff0000" />}
                />
        </Div>

    )
}
