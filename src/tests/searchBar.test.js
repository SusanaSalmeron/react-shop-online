import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import SearchBar from "../components/SearchBar/searchBar";
import userEvent from "@testing-library/user-event"

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate

}))


describe('SearchBar', () => {
    const productCatalogService = require('../services/productCatalogService')
    const mockedHandleSearch = jest.fn()
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

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        const { rerender } = render(<SearchBar onClick={mockedHandleSearch} />)


        await screen.findByRole('textbox')
        rerender(<SearchBar />)
        const listOptions = screen.getByPlaceholderText('Search...')
        user.click(listOptions)
        const option = await waitFor(() => {
            screen.getByText('Natasha Denona')
        })
        user.click(option)
        const button = await screen.findAllByRole('button')
        await user.click(button[0])
        /* await waitFor(() => {
            expect(mockedHandleSearch).toHaveBeenCalled()
        }) */

    })
})