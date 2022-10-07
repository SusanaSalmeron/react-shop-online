import { render, screen, waitFor } from "@testing-library/react"
import NavbarMobile from "../components/NavbarMobile/navbarMobile";
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom'

describe('NavBarMobile', () => {
    const productCatalogService = require('../services/productCatalogService')
    test('renders correcty', async () => {
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
        const user = userEvent.setup()
        const mockedOnClick = jest.fn()
        const history = createMemoryHistory()

        render(
            <HistoryRouter history={history}>
                <NavbarMobile
                    isOpen={true}
                    closeMenu={mockedOnClick} />
            </HistoryRouter>)

        const links = await screen.findAllByRole('link')
        expect(links).toHaveLength(11)
        await user.click(links[0])
        expect(history.location.pathname).toBe("/")
        await user.click(links[2])
        expect(history.location.pathname).toBe("/bronzer")
        await user.click(links[3])
        expect(history.location.pathname).toBe("/blush")
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })
})