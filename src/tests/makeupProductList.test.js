import { render, screen } from '@testing-library/react'
import MakeupProductsList from '../components/MakeupProductList/makeupProductList'
import SpinnerContext from '../context/SpinnerContext';
import { BrowserRouter as Router } from 'react-router-dom';



jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        keyword: 'Natasha'
    })
}))

describe('MakeupProductList', () => {
    const productCatalogService = require('../services/productCatalogService')
    const wishlistService = require('../services/wishlistService')
    test('renders a list of products when have a keyword', async () => {
        const mockedGetAllProductsFromSearch = jest.spyOn(productCatalogService, 'getAllProductsFromSearch').mockResolvedValue([{
            id: 1,
            name: 'Biba Palette',
            brand: 'Natasha Denona',
            price: 129,
            api_featured_image: 'www.1.com'
        },
        {
            id: 2,
            name: 'Mini Bronze Palette',
            brand: 'Natasha Denona',
            price: 25,
            api_featured_image: 'www.2.com'
        }
        ])
        jest.spyOn(wishlistService, 'checkProductExistsOnWishlist').mockResolvedValue(false)

        render(
            <Router>
                <SpinnerContext.Provider value={{ spinnerDisplay: true, setSpinnerDisplay: jest.fn() }}>
                    <MakeupProductsList />
                </SpinnerContext.Provider>
            </Router>
        )
        expect(await screen.findByText('Search Results for: Natasha')).toBeInTheDocument()
        expect(mockedGetAllProductsFromSearch).toHaveBeenCalledWith('Natasha')
        const button = await screen.findAllByRole('button')
        expect(button).toHaveLength(4)
    })
})