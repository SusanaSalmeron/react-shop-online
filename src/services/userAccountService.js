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
    return response ? response.data : {}
}

export async function getUserAddresses(userId) {
    let response
    const requestParams = { params: { id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/addresses`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
}

export async function getUserOrders(userId) {
    let response
    const requestParams = { params: { id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/orders`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
}

export async function getOrder(userId, orderId) {
    let response
    const requestParams = { params: { id: userId, orderid: orderId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/orders/${orderId}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : {}
}

export async function getOrdersBy(status, userId) {
    let response
    const requestParams = { params: { status: status, id: userId } }
    try {
        response = await axios.get(`${baseUrl}/users/${userId}/orders/status/${status}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    return response ? response.data : []
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
    try {
        const body = {
            password,
            newPassword,
            repeatNew,
        }
        const requestParams = { params: { id: userId } }

        await axios.put(`${baseUrl}/users/${userId}/password`, body, requestParams, { headers })
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}

export async function updateUserAccountBillingAddress(userId, userName, surname, identification, address, postalZip, city, country) {
    try {
        const body = {
            userName,
            surname,
            identification,
            address,
            postalZip,
            city,
            country
        }
        const requestParams = { params: { id: userId } }

        await axios.put(`${baseUrl}/users/${userId}/billing`, body, requestParams, { headers })
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}


export async function updateUserAccountShippingAddress(addressId, userName, surname, address, postalZip, city, country, userId) {
    try {
        const body = {
            userName,
            surname,
            address,
            postalZip,
            city,
            country
        }
        const requestParams = { params: { userid: userId, addressid: addressId } }
        await axios.put(`${baseUrl}/users/${userId}/addresses/${addressId}`, body, requestParams, { headers })
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}

export async function newShippingAddress(id, userName, surname, address, postalZip, city, country, defaultAddress) {
    try {
        const body = {
            userName,
            surname,
            address,
            postalZip,
            city,
            country,
            defaultAddress
        }
        const requestParams = { params: { id: id } }
        await axios.post(`${baseUrl}/users/${id}/addresses/new`, body, requestParams, { headers })
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}

export async function deleteAddress(addressId, userId) {
    try {
        const requestParams = { params: { params: { id: userId, addressId: addressId } } }
        await axios.delete(`${baseUrl}/users/${userId}/addresses/${addressId}`, requestParams, { headers })
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}

export async function getUserWishlist(userId) {
    let response
    try {
        const requestParams = { params: { id: userId } }
        response = await axios.get(`${baseUrl}/users/${userId}/wishlist`, requestParams)
    } catch (err) {
        console.log('Error', err)
    }
    return response ? response.data : []
}

export async function deleteProductFromWishlist(userId, productId) {
    let response
    try {
        const requestParams = { params: { id: userId, productId: productId } }
        response = await axios.delete(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
        response = err.response
    }
    return response.status === 200
}

export async function addProductToWishlist(userId, productId) {
    let response
    try {
        const requestParams = {
            params:
                { id: userId, productId: productId, }
        }
        const body = {}
        response = await axios.put(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams, body, { headers })
    } catch (err) {
        console.log('Error', err)
        response = err.response
    }
    return response.status === 201
}

export async function getUserReviews(userId) {
    let response
    try {
        const requestParams = {
            params: { id: userId }
        }
        response = await axios.get(`${baseUrl}/users/${userId}/reviews`, requestParams)

    } catch (err) {
        console.log('Error', err)
    }
    console.log(response)
    return response ? response.data : {}
}

export async function getReviewBy(userId, reviewId) {
    let response
    try {
        const requestParams = {
            params: {
                userId: userId,
                reviewId: reviewId
            }
        }
        response = await axios.get(`${baseUrl}/users/${userId}/reviews/${reviewId}`, requestParams)

    } catch (err) {
        console.log('Error', err)
    }
    return response ? response.data : {}
}

export async function addUserReview(productId, productName, userId, rating, comment) {
    let response
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
        response = await axios.post(`${baseUrl}/users/${userId}/review`, body, requestParams, { headers })

    } catch (err) {
        console.log('Error', err)
        response = err.response
    }
    return response.status === 201
}

export async function updateUserReview(userId, reviewId, productId, rating, comment) {
    let response
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
        response = await axios.put(`${baseUrl}/users/${userId}/reviews/${reviewId}`, body, requestParams, { headers })
    } catch (err) {
        console.log('Error', err)
        response = err.response
    }
    return response.status === 201
}

export async function userLogin(email, password) {
    let response
    let id
    try {
        const body = {
            email: email,
            password: password
        }
        response = await axios.post(`${baseUrl}/users/login`, body, { headers })
        localStorage.setItem('token', response.data.token)
        const decodeToken = decode(response.data.token)
        id = decodeToken.id
    } catch (err) {
        console.log('Error', err)
        return null
    }
    return id
}

export async function userSignup(email, password, repeatPassword) {
    let response
    try {
        const body = {
            email: email,
            password: password,
            repeatPassword: repeatPassword
        }
        response = await axios.post(`${baseUrl}/users/signup`, body, { headers })
    } catch (err) {
        console.log('Error', err)
        response = {
            status: err.response.status,
            message: err.response.data.error
        }
    }
    return response
}




