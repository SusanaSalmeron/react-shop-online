import axios from 'axios';
import decode from 'jwt-decode'


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
            userName: userName,
            surname: surname,
            identification: identification,
            dateOfBirth: dateOfBirth,
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

export async function addProductToWishlist(userId, productId) {
    let result
    try {
        const requestParams = {
            params:
                { id: userId, productId: productId, }
        }
        const body = {}
        result = await axios.put(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams, body, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.status === 201
}

export async function getUserReviews(userId) {
    let result
    try {
        const requestParams = {
            params: { id: userId }
        }
        result = await axios.get(`${baseUrl}/users/${userId}/reviews`, requestParams)

    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function getReviewBy(userId, reviewId) {
    let result
    try {
        const requestParams = {
            params: {
                userId: userId,
                reviewId: reviewId
            }
        }
        result = await axios.get(`${baseUrl}/users/${userId}/reviews/${reviewId}`, requestParams)

    } catch (err) {
        console.log('Error', err)
    }
    return result.data
}

export async function addUserReview(productId, productName, userId, rating, comment) {
    let result
    try {
        const requestParams = {
            params: {
                userId: userId
            }
        }
        const body = {
            productId: productId,
            productName: productName,
            rating: rating,
            comment: comment
        }
        result = await axios.post(`${baseUrl}/users/${userId}/review`, body, requestParams, { headers })

    } catch (err) {
        console.log('Error', err)
    }
    return result.status === 201
}

export async function updateUserReview(userId, reviewId, productId, rating, comment) {
    let result
    try {
        const requestParams = {
            params: {
                userId: userId,
                reviewId: reviewId
            }
        }
        const body = {
            productId,
            rating,
            comment
        }
        result = await axios.put(`${baseUrl}/users/${userId}/reviews/${reviewId}`, body, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
    }
    return result.status === 201
}

export async function userLogin(email, password) {
    let result
    let id
    try {
        const body = {
            email: email,
            password: password
        }
        result = await axios.post(`${baseUrl}/users/login`, body, { headers })
        localStorage.setItem('token', result.data.token)
        const decodeToken = decode(result.data.token)
        id = decodeToken.id
    } catch (err) {
        console.log('Error', err)
    }
    return id
}




