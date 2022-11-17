import decode from 'jwt-decode';
import dayjs from 'dayjs'



export const checkValidToken = (paramId) => {
    const token = localStorage.getItem('token')
    const id = localStorage.getItem('id')
    if (token) {
        const decodeToken = decode(token)
        let actualDate = dayjs().unix()
        if (parseInt(id) === parseInt(paramId) && decodeToken.expiration > actualDate) {
            return true
        } else {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            return false
        }
    }
    return false
}