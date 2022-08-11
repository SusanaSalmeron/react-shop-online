import axios from 'axios';


const baseUrl = "http://localhost:3001/v1"

export async function getUserData(userId, addressId) {
    let response
    const requestParams = { params: { id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/data`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

export async function getUserAddresses(userId) {
    let response
    const requestParams = { params: { id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/addresses`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

export async function updateUserAccountPassword(userId, password, newPassword, repeatNew) {
    let result
    const requestParams = { params: { id: userId } }
    try {
        const body = {
            password,
            newPassword,
            repeatNew,
        }
        console.log(body)
        const headers = {
            'Content-Type': 'application/json'
        }
        result = await axios.put(`${baseUrl}/users/${userId}/password`, body, requestParams, { headers })

    } catch (err) {
        console.log('Error', err)
    }
    console.log(result)
    return result.data
}

