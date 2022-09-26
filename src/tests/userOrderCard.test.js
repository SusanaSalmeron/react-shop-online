
import { render, screen } from "@testing-library/react";
import UserOrdersCard from "../components/UserOrderCard/userOrderCard";
import userEvent from '@testing-library/user-event'


const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: '3',
        status: 'shipped'
    })
}))

describe('UserOrderCard', () => {
    test('renders ok when there is an order', async () => {
        const data = {
            order_id: 1,
            order_date: "03/02/2022",
            total_order: 37,
            status: "shipped",
        }

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        render(
            <UserOrdersCard data={data} />
        )

        expect(await screen.findByText('DATE: 03/02/2022')).toBeInTheDocument()
        const button = await screen.findByRole('button')
        expect(button).toBeInTheDocument()
        await user.click(button)
        expect(mockedNavigate).toHaveBeenCalledWith('/account/3/orders/1')
    })
})