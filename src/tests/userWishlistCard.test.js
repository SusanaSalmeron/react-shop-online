import { render, screen } from "@testing-library/react"
import UserWishlistCard from "../components/UserWishlistCard/userWishlistCard";
import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
}))

const mockedNavigate = jest.fn();


describe('UserWishlistCard', () => {
    test('renders empty when there is no product to show', async () => {
        const data = {}
        render(<UserWishlistCard data={data} />)

        expect(screen.queryByText('Natasha Denona')).not.toBeInTheDocument()
        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(3)
        expect(screen.queryByAltText("Biba Palette")).not.toBeInTheDocument()
    });

    test('renders ok when there is product to show', async () => {
        const data = {
            id: 1,
            brand: "Natasha Denona",
            name: "Biba Palette",
            price: 120,
            api_featured_image: "zzzzzzzz"
        }
        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        render(<UserWishlistCard data={data} />)

        expect(screen.getByText('Natasha Denona')).toBeInTheDocument()
        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(3)
        expect(screen.getByAltText('Biba Palette')).toBeInTheDocument()
        expect(buttons[0]).toBeInTheDocument()
        await user.click(buttons[0])
        expect(mockedNavigate).toHaveBeenCalledTimes(1)
        expect(buttons[1]).toBeInTheDocument()
        expect(buttons[2]).toBeInTheDocument()

    })

})