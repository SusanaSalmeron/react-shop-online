import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar/navbar";
import { BrowserRouter as Router } from 'react-router-dom'


describe('Navbar', () => {
    const productCatalogService = require('../services/productCatalogService')
    test('renders ok', async () => {
        jest.spyOn(productCatalogService, 'getAllProducts').mockResolvedValue([
            {
                name: "Natasha Denona",
                value: "Natasha Denona"
            },
            {
                name: "Biba Palette",
                value: "Biba Palette"
            }
        ])

        render(
            <Router>
                <Navbar />
            </Router>
        )
        expect(await screen.findByRole('navigation')).toHaveClass('navbar')
        expect(await screen.findAllByRole('list')).toHaveLength(5)
        expect(await screen.findAllByRole('listitem')).toHaveLength(24)
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})