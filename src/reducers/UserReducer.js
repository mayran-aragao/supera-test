import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
    name: '',
    purchases:[],
    products:[],
}

export default (state = initialState , action = {}) => {

    switch(action.type) {
        case 'setName': 
            AsyncStorage.setItem('name', action.payload.name)
            return {...state, name:action.payload.name}
    }
}