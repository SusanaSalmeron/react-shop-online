import { render, screen } from "@testing-library/react";
import MakeupProductCard from "../components/MakeupProductsCard/makeupProductCard";
import SpinnerContext from "../context/SpinnerContext";
import userEvent from '@testing-library/user-event';


const mockedProductData = {
    id: 1,
    name: "Biba Palette",
    brand: "Natasha Denona",
    api_featured_data: "www.1.com",
    price: 129
}

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('MakeupProductCard', () => {
    beforeEach(() => {
        Object.defineProperty(window, 'localStorage', {
            value: {
                getItem: jest.fn(() => 2)
            },
            writable: true
        })
    })

    const userAccountService = require('../services/userAccountService')
    const wishlistService = require('../services/wishlistService')
    test('Given a product that belongs in a wishlist when I click it will be removed from the wishlist', async () => {
        const mockedAddProductToWishlist = jest.spyOn(userAccountService, 'addProductToWishlist').mockResolvedValue(true)
        const mockedDeleteProductFromWishlist = jest.spyOn(userAccountService, 'deleteProductFromWishlist').mockResolvedValue(true)
        const mockedCheckProductExistsOnWishlist = jest.spyOn(wishlistService, 'checkProductExistsOnWishlist').mockResolvedValue(true)

        const user = userEvent.setup()
        render(
            <SpinnerContext.Provider value={{ spinnerDisplay: true, setSpinnerDisplay: jest.fn() }}>
                <MakeupProductCard productData={mockedProductData} />
            </SpinnerContext.Provider>
        )

        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(2)
        await user.click(buttons[0])
        expect(mockedCheckProductExistsOnWishlist).toHaveBeenCalledWith(2, 1)
        expect(mockedDeleteProductFromWishlist).toHaveBeenCalledWith(2, 1)
        expect(mockedAddProductToWishlist).not.toHaveBeenCalled()
        const image = await screen.findByRole('figure')
        await user.click(image)
        expect(mockedNavigate).toHaveBeenCalledWith('/product/1')
    })

    test('Given a product that not belongs in a wishlist when I click it will be added to the wishlist', async () => {
        const mockedAddProductToWishlist = jest.spyOn(userAccountService, 'addProductToWishlist').mockResolvedValue(true)
        const mockedDeleteProductFromWishlist = jest.spyOn(userAccountService, 'deleteProductFromWishlist').mockResolvedValue(false)
        const mockedCheckProductExistsOnWishlist = jest.spyOn(wishlistService, 'checkProductExistsOnWishlist').mockResolvedValue(false)

        const user = userEvent.setup()
        render(
            <SpinnerContext.Provider value={{ spinnerDisplay: true, setSpinnerDisplay: jest.fn() }}>
                <MakeupProductCard productData={mockedProductData} />
            </SpinnerContext.Provider>
        )

        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(2)
        await user.click(buttons[0])
        expect(mockedCheckProductExistsOnWishlist).toHaveBeenCalledWith(2, 1)
        expect(mockedDeleteProductFromWishlist).not.toHaveBeenCalled()
        expect(mockedAddProductToWishlist).toHaveBeenCalledWith(2, 1)
    })

})