import { render, screen, waitFor } from '@testing-library/react';
import UserOrdersByStatus from '../components/UserOrdersByStatus/userOrdersByStatus';
import userEvent from '@testing-library/user-event';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3',
        status: "shipped"
    }),
    useNavigate: () => mockedNavigate
}))
const mockedNavigate = jest.fn()

describe('UserOrdersByStatus', () => {
    const userAccountService = require('../services/userAccountService')

    test('renders ok when there are no products on the list', async () => {
        jest.spyOn(userAccountService, 'getOrdersBy').mockResolvedValue([])

        render(
            <UserOrdersByStatus />
        )

        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(screen.queryByText('DATE:')).not.toBeInTheDocument()
        expect(userAccountService.getOrdersBy).toHaveBeenCalled()
    })

    test('renders ok when there are orders on the list', async () => {
        jest.spyOn(userAccountService, 'getOrdersBy').mockResolvedValue([
            {
                orderId: 1,
                orderDate: "02/02/2022",
                totalOrder: 37,
                status: "shipped",
            }
        ])

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        render(
            <UserOrdersByStatus />
        )
        expect(await screen.findByText('My orders')).toBeInTheDocument()
        expect(await screen.findByText('DATE: 02/02/2022')).toBeInTheDocument()
        expect(userAccountService.getOrdersBy).toHaveBeenCalledWith("shipped", '3')
        const button = await screen.findByRole('button')
        expect(button).toHaveAccessibleName('SEE')
        user.click(button)
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith('/account/3/orders/1')
        })
    })
})