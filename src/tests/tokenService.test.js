import decode from 'jwt-decode';
import dayjs from 'dayjs';

jest.mock('jwt-decode', () => jest.fn());


describe('CheckValidToken', () => {
    const { checkValidToken, getValidToken } = require('../services/tokenService')

    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn().mockImplementation((label) => {
                    const labels = {
                        "token": undefined,
                        "id": 1
                    }
                    return labels[label]
                }),
                removeItem: jest.fn()
            },
            writable: true
        })
    })
    test('function checkValidToken returns false when token is not valid', async () => {
        const isValidToken = checkValidToken(1)
        expect(isValidToken).toBeFalsy()
    })

    test('function checkValidToken returns true when token is valid', async () => {
        jest.spyOn(window.localStorage, 'getItem').mockImplementationOnce(() => ('kjdshkfkñlskg'))
        decode.mockImplementationOnce(() => ({ expiration: dayjs().unix() + 100 }));

        const isValidToken = checkValidToken(1)
        expect(isValidToken).toBeTruthy()
    })

    test('function getValidToken returns null when token is not valid', () => {
        const token = getValidToken()
        expect(token).toBeNull()
    })

    test('function getValidToken return token when is valid', () => {
        jest.spyOn(window.localStorage, 'getItem').mockImplementationOnce(() => 'fjsghjdfhgdsñ')
        decode.mockImplementationOnce(() => ({ expiration: 1985442541 }));

        const token = getValidToken()
        expect(token).toBe('fjsghjdfhgdsñ')
    })

})