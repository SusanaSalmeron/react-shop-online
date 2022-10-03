import { render, screen, waitFor } from '@testing-library/react';
import NewProductsList from '../components/NewProductList/newProductList';
import userEvent from '@testing-library/user-event';

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('NewProductList', () => {
    const productCatalogService = require('../services/productCatalogService')
    test('renders ok', async () => {
        const mockedGetAllNewProducts = jest.spyOn(productCatalogService, 'getAllNewProducts').mockResolvedValue([
            {
                id: 1,
                brand: "Natasha Denona",
                name: "Biba Palette",
                price: 129,
                description: "2dfsghjkglfjghdfgsda",
                product_type: "eyeshadow",
                api_featured_image: "www.1.com",
                product_colors: [{
                    hex_value: "aaaa",
                    colour_name: "Biba Palette"
                }]
            },
            {
                id: 2,
                brand: "Pat McGrath",
                name: "Mothership V",
                price: 120,
                description: "esrdyturtytyrtwretyr",
                product_type: "eyeshadow",
                api_featured_image: "www.2.com",
                product_colors: [{
                    hex_value: "gsfgas",
                    colour_name: "Mothership V"
                }]
            }
        ])

        const user = userEvent.setup()

        render(<NewProductsList />)

        expect(await screen.findByRole('heading')).toBeInTheDocument()
        expect(await screen.findByRole('figure')).toBeInTheDocument()
        const images = await screen.findAllByRole('img')
        expect(images).toHaveLength(2)
        expect(mockedGetAllNewProducts).toHaveBeenCalled()
        user.click(images[0])

        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith('/product/1')
        })
    })
})