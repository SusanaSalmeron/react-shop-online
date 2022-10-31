import axios from 'axios';

const baseUrl = "http://localhost:3001/v1";



export async function checkProductExistsOnWishlist(userId, productId) {
    let response
    const requestParams = { params: { id: userId, productId: productId } }
    try {
        response = await axios.head(`${baseUrl}/users/${userId}/wishlist/${productId}`, requestParams)
    } catch (err) {
        console.log('Error', err.message)
    }
    console.log(response)
    return response.status < 400
}