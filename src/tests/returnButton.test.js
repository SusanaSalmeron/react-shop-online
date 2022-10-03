import { render, screen, waitFor } from "@testing-library/react"
import ReturnButton from "../components/ReturnButton/returnButton";
import userEvent from '@testing-library/user-event'

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))



describe('ReturnButton', () => {
    test('it navigate to the previous page', async () => {
        const mockedOnClick = jest.fn()
        const user = userEvent.setup()

        render(<ReturnButton onClick={mockedOnClick} />)

        const button = screen.getByRole('button')
        expect(button).toHaveAccessibleName('Return')
        user.click(button)
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith(-1)
        })
    })
})