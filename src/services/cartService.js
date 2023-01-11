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

export async function checkProductsStock(productId) {
    try {
        const body = [productId]
        await axios.post(`${baseUrl}/cart/products`, body, getHeaders())
        return true
    } catch (err) {
        console.log('Error', err)
        return false
    }
}

