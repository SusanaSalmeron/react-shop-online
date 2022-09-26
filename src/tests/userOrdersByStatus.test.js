import { render, screen } from '@testing-library/react';
import UserOrdersByStatus from '../components/UserOrdersByStatus/userOrdersByStatus'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3'
    }),
    useNavigate: () => mockedNavigate
}))
const mockedNavigate = jest.fn()

describe('UserOrdersByStatus', () => {
    const userAccountService = require('../services/userAccountService')

    test('renders ok when there are no products on the list', async () => {
        jest.spyOn(userAccountService, 'getOrdersBy').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([])
                })
            }
        )
        render(
            <UserOrdersByStatus />
        )

        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(screen.queryByText('DATE:')).not.toBeInTheDocument()
        expect(userAccountService.getOrdersBy).toHaveBeenCalled()
    })

    test('renders ok when there are orders on the list', async () => {
        jest.spyOn(userAccountService, 'getOrdersBy').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([

                        {
                            order_id: 1,
                            order_date: "02/02/2022",
                            total_order: 37,
                            status: "shipped",
                        }
                    ])
                })
            }
        )
        render(
            <UserOrdersByStatus />
        )
        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(await screen.findByText('DATE: 02/02/2022')).toBeInTheDocument()
        expect(userAccountService.getOrdersBy).toHaveBeenCalled()
    })
})