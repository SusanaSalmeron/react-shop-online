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
        brand: "Natasha Denona",
        name: "Biba Palette",
        price: 120,
        api_featured_image: "wwwww"
    },
    {
        brand: "Pat McGrath",
        name: "Mothership V",
        price: 130,
        api_featured_image: "zzzzzz"
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

    test('renders ok when there are products on the list', async () => {
        jest.spyOn(userAccountService, 'getUserWishlist').mockResolvedValue(products)
        render(
            <UserWishlist />
        )
        expect(await screen.findByText("Natasha Denona")).toBeInTheDocument()
    });

})