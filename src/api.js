import AsyncStorage from "@react-native-async-storage/async-storage";

export default {
    getName: async () => {
        return await AsyncStorage.getItem('name')
    },
    
    
}