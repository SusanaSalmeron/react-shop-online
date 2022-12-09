import { render, screen, waitFor } from "@testing-library/react"
import ProductDescription from "../components/ProductsDescription/productDescription"
import SpinnerContext from "../context/SpinnerContext";
import userEvent from '@testing-library/user-event'

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: "1",
    })
}))


describe('ProductsDescription', () => {

    const productCatalogService = require('../services/productCatalogService')
    const userAccountService = require('../services/userAccountService')
    const popUpAlert = require('../utils/popUpAlert')

    test('renders ok when there is a product', async () => {

        const mockedGetProductById = jest.spyOn(productCatalogService, 'getProductById').mockResolvedValue(
            {
                id: 1,
                brand: "Natasha Denona",
                name: "Biba Palette",
                price: 129,
                description: "dsfghjdfgshfhtdsf",
                product_type: "eyeshadow",
                api_featured_image: "www",
                product_colors: ["Biba Palette"]
            }
        )
        const mockedAddProductToWishlist = jest.spyOn(userAccountService, 'addProductToWishlist').mockResolvedValue(true)


        const mockedPopUpAlert = jest.spyOn(popUpAlert, 'popUpAlert')

        const user = userEvent.setup()


        const { rerender } = render(
            <SpinnerContext.Provider value={{ spinnerDisplay: true, setSpinnerDisplay: jest.fn() }} >
                <ProductDescription />
            </SpinnerContext.Provider>
        )

        const titles = await screen.findAllByRole('heading')
        expect(titles).toHaveLength(4)

        rerender(<SpinnerContext.Provider value={{ spinnerDisplay: true, setSpinnerDisplay: jest.fn() }} >
            <ProductDescription />
        </SpinnerContext.Provider>)

        expect(mockedGetProductById).toHaveBeenCalledWith("1")
        await waitFor(() => {
            expect(titles[0]).toHaveTextContent("Biba Palette")
        })
        await waitFor(() => {
            expect(titles[1]).toHaveTextContent("Brand: Natasha Denona")
        })

        await waitFor(() => {
            expect(titles[2]).toHaveTextContent("129 €")
        })
        await waitFor(() => {
            expect(titles[3]).toHaveTextContent("Choose your colour:")
        })

        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(3)
        expect(buttons[0]).toHaveTextContent("BUY")
        expect(buttons[1]).toHaveTextContent("Add to my wishlist")
        user.click(buttons[1])
        await waitFor(() => {
            expect(mockedAddProductToWishlist).toHaveBeenCalled()
        })
        await waitFor(() => {
            expect(mockedPopUpAlert).toHaveBeenCalledWith('center', 'warning', 'You must be log in to add products to your wishlist', true, 2000)
        })
        expect(await screen.findByAltText('Biba Palette')).toBeInTheDocument()
    })
})