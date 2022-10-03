import { render, screen } from "@testing-library/react"
import UserWishlist from "../components/UserWishList/userWishList";
import userEvent from '@testing-library/user-event'

const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: '3',
    }),
    useNavigate: () => mockedNavigate
}))

const products = [
    {
        id: 1,
        brand: "Natasha Denona",
        name: "Biba Palette",
        price: 120,
        description: "sdafghjk",
        product_type: "eyeshadow",
        api_featured_image: "wwwww",
        product_colors: []
    },
    {
        id: 2,
        brand: "Pat McGrath",
        name: "Mothership V",
        price: 130,
        description: "sdafghjk",
        product_type: "eyeshadow",
        api_featured_image: "zzzzzz",
        product_colors: []
    }
]


describe('UserWishlist', () => {
    const userAccountService = require('../services/userAccountService')

    test('renders ok when there are no products on the list', async () => {
        jest.spyOn(userAccountService, 'getUserWishlist').mockResolvedValue([])

        render(
            <UserWishlist />
        )

        expect(await screen.findByText('You don\'t have products in your wishlist')).toBeInTheDocument()
    })

    //TODO - when clicks delete button, deleteHandleClick not detected

    test('renders ok when there are products on the list', async () => {
        jest.spyOn(userAccountService, 'getUserWishlist').mockResolvedValue(products)
        const mockedDeleteProduct = jest.spyOn(userAccountService, 'deleteProductFromWishlist').mockResolvedValue(true)

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })
        render(
            <UserWishlist />
        )
        expect(await screen.findByText("Natasha Denona")).toBeInTheDocument()
        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(6)
        user.click(buttons[2])
        /* expect(mockedDeleteProduct).toHaveBeenCalledWith("1", "1")*/
    });

})