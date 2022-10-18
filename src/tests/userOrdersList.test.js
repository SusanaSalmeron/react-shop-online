import { render, screen, waitFor } from "@testing-library/react";
import UserOrdersList from "../components/UserOrdersList/userOrdersList";
import userEvent from '@testing-library/user-event';

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3'
    }),
    useNavigate: () => mockedNavigate
}))




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
        jest.spyOn(userAccountService, 'getUserOrders').mockResolvedValue([
            {
                orderId: 1,
                orderDate: "01/02/2022",
                totalOrder: 37,
                status: "shipped",
            }
        ])

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        render(
            <UserOrdersList />
        )
        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(await screen.findByText('DATE: 01/02/2022')).toBeInTheDocument()
        const button = await screen.findByRole('button')
        expect(button).toHaveAccessibleName('SEE')
        user.click(button)
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith('1')
        })
    })
})