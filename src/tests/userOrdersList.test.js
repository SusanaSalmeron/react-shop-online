import { render, screen } from "@testing-library/react";
import UserOrdersList from "../components/UserOrdersList/userOrdersList";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3'
    }),
    useNavigate: () => mockedNavigate
}))

const mockedNavigate = jest.fn()


describe('UserOrdersList', () => {
    const userAccountService = require('../services/userAccountService')

    test('renders ok when there are no orders on the list', async () => {
        jest.spyOn(userAccountService, 'getUserOrders').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([])
                })
            }
        )
        render(

            <UserOrdersList />
        )
        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(screen.queryByText('DATE:')).not.toBeInTheDocument()
    })

    test('renders ok when there are orders on the list', async () => {
        jest.spyOn(userAccountService, 'getUserOrders').mockImplementation(
            (key) => {
                return new Promise((res, rej) => {
                    return res([

                        {
                            order_id: 1,
                            order_date: "01/02/2022",
                            total_order: 37,
                            status: "shipped",
                        }
                    ])
                })
            }
        )
        render(
            <UserOrdersList />
        )
        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(await screen.findByText('DATE: 01/02/2022')).toBeInTheDocument()
    })
})