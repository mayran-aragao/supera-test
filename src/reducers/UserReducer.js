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
            AsyncStorage.setItem('productsList', JSON.stringify(productsList))
            return {...state, productsList:action.payload.product}
        break;
        case 'delProductsList':
            return {...state, productsList:[]}
        break;
    }
}