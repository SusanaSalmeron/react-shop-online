import { render, screen, waitFor } from "@testing-library/react";
import NewProductImage from "../components/NewProductImage/newProductImage";
import userEvent from '@testing-library/user-event'

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('NewProductImage', () => {
    test('renders ok', async () => {
        const user = userEvent.setup()
        render(<NewProductImage src="www.1.com" name="Biba Palette" value="1" />)

        const image = await screen.findByRole('img')
        user.click(image)
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith('/product/1')
        })
    })
})