import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color: #F5F5F5;
`;
export const Header = styled.View`
    flex-direction: row;
    width: 100%;
    padding-top: 20px;
    padding-left: 10px;
    align-items: center;
    justify-content: space-between;
`;
export const DivLabel = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding-left: 10px;
`;
export const DivBack = styled.View`
    background-color: #fff;
    border-radius: 15px;
    elevation: 5;
`;
export const TextoHeader = styled.Text`
    font-size: 24px;
    color: #008B8B;
`;
export const Div = styled.View`
    max-height:40%;
    border-radius: 15px;
    margin-top: 15px;
    margin-left: 20px;
    margin-right: 20px;
    background-color: #fff;
`;
export const DivCheckout = styled.View`
    flex:1;
    justify-content: flex-start;
    align-items: flex-end;
    padding:20px;
`;
export const Label = styled.Text`
    font-size: 18px;
    font-weight: bold;
    color:#008B8B ;
    padding: 10px;
`;
export const DivValues = styled.View`
    flex-direction: row;
    max-width: 100%;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding-right: 10px;
 
`;
export const ValueText = styled.Text`
    font-size: 17px;
    font-weight: 800;
    padding-bottom: 10px;
    padding-left: 10px;
    color:#454545;
`;
export const DivImage = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
