import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    name: '',
    productsList:[],
}

export default (state = initialState , action = {}) => {
    let productsList = [...state.productsList]

    switch(action.type) {
        case 'setName': 
            AsyncStorage.setItem('name', action.payload.name)
            return {...state, name:action.payload.name}
        break;
        case 'setProductsList':
            productsList.push(action.payload.product)
            console.log("essa é a lista ", productsList )
            AsyncStorage.setItem('productsList', JSON.stringify(productsList))
            return {...state, productsList}
        break;
    }
}