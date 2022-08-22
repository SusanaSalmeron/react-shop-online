import axios from 'axios';


const baseUrl = "http://localhost:3001/v1";
const headers = {
    'Content-Type': 'application/json'
}

export async function getUserData(userId) {
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

export async function getUserOrders(userId) {
    let response
    const requestParams = { params: { id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/orders`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }

    return response.data
}

export async function getOrder(userId, orderId) {
    let response
    const requestParams = { params: { id: userId, orderid: orderId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/orders/${orderId}`, requestParams)

    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

export async function updateUserAccountData(userId, userName, surname, identification, dateOfBirth, email, phone) {
    let result
    try {
        const body = {
            user_name: userName,
            surname: surname,
            identification: identification,
            date_of_birth: dateOfBirth,
            email: email,
            phone: phone,
        }
        const requestParams = { params: { id: userId } }

        result = await axios.put(`${baseUrl}/users/${userId}/data`, body, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function updateUserAccountPassword(userId, password, newPassword, repeatNew) {
    let result
    try {
        const body = {
            password,
            newPassword,
            repeatNew,
        }
        const requestParams = { params: { id: userId } }

        result = await axios.put(`${baseUrl}/users/${userId}/password`, body, requestParams, { headers })

    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function updateUserAccountBillingAddress(userId, user_name, surname, identification, address, postalZip, city, country) {
    let result
    try {
        const body = {
            user_name,
            surname,
            identification,
            address,
            postalZip,
            city,
            country
        }
        const requestParams = { params: { id: userId } }

        result = await axios.put(`${baseUrl}/users/${userId}/billing`, body, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}


