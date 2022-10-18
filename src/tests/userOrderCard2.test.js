import { render, screen } from "@testing-library/react";
import UserOrdersCard from "../components/UserOrderCard/userOrderCard";
import userEvent from '@testing-library/user-event'


const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: '3',
    })
}))

describe('UserOrderCard', () => {
    test('renders ok when there is an order', async () => {
        const data = {
            orderId: 1,
            orderDate: "03/02/2022",
            totalOrder: 37,
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
        expect(mockedNavigate).toHaveBeenCalledWith('1')
    })
})