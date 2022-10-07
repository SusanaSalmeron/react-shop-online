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

export async function getOrdersBy(status, userId) {
    let response
    const requestParams = { params: { status: status, id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/orders/status/${status}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response.data
}

export async function updateUserAccountData(userId, userName, surname, identification, dateOfBirth, email, phone) {
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

        await axios.put(`${baseUrl}/users/${userId}/data`, body, requestParams, { headers })
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
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


//TODO - UPDATE BILLING ADDRESS
export async function updateUserAccountShippingAddress(addressId, user_name, surname, address, postalZip, city, country, userId) {
    let result
    try {
        const body = {
            user_name,
            surname,
            address,
            postalZip,
            city,
            country
        }
        const requestParams = { params: { userid: userId, addressid: addressId } }
        result = await axios.put(`${baseUrl}/users/${userId}/addresses/${addressId}`, body, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function newShippingAddress(id, user_name, surname, address, postalZip, city, country, defaultAddress) {
    let result
    try {
        const body = {
            user_name,
            surname,
            address,
            postalZip,
            city,
            country,
            defaultAddress
        }
        const requestParams = { params: { id: id } }
        result = await axios.post(`${baseUrl}/users/${id}/addresses/new`, body, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function deleteAddress(addressId, userId) {
    let result
    try {
        const requestParams = { params: { params: { id: userId, addressId: addressId } } }
        result = await axios.delete(`${baseUrl}/users/${userId}/addresses/${addressId}`, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function getUserWishlist(userId) {
    let result
    try {
        const requestParams = { params: { id: userId } }
        result = await axios.get(`${baseUrl}/users/${userId}/wishlist`, requestParams)
    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function deleteProductFromWishlist(userId, productId) {
    let result
    try {
        const requestParams = { params: { id: userId, productId: productId } }
        result = await axios.delete(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.status === 200
}

//TODO - token is missing to extract id from user
export async function addProductToWishlist(userId, productId) {
    let result
    try {
        const requestParams = {
            params:
                { id: "1000", productId: productId, }
        }
        const body = {}
        result = await axios.put(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams, body, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.status === 201
}


