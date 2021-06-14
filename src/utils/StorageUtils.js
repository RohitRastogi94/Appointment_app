import AsyncStorage from '@react-native-async-storage/async-storage';

const SAVED_USER_KEY = 'saved_user_key_123'

export const setData = async (key, value) => {
    await AsyncStorage.setItem(key, value);
    return true
}

export const getData = async (key) => {
    let data  = await AsyncStorage.getItem(key);
    return data
}

export const setUserDetails = async (data) => {
    let userDetails = await getUserDetails()
    let mergedData = []
    if(userDetails && userDetails.length > 0) {
        mergedData = JSON.parse(JSON.stringify(userDetails))
    }
    mergedData.push(data)
    let json = JSON.stringify(mergedData);
    let saved = await setData(SAVED_USER_KEY, json)
    if(saved) {
        return true
    }
    else {
        return false
    }
}

export const getUserDetails = async () => {
    let userDetails = await getData(SAVED_USER_KEY)
    return JSON.parse(userDetails)
}