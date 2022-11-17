import axios from 'axios';

const baseUrl = "http://localhost:3001/v1";

const getHeaders = () => {
    const token = localStorage.getItem('token')
    return {
        headers: {
            "Authorization": `Bearer: ${token}`
        }
    }
}


export async function checkProductExistsOnWishlist(userId, productId) {
    let response
    const requestParams = { ...getHeaders(), ...{ params: { id: userId, productId: productId } } }
    try {
        response = await axios.head(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
        response = err.response
    }
    return response.status < 400
}