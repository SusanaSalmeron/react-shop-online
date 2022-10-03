import { render, screen } from "@testing-library/react";
import NavigateButton from "../components/NavigateButton/navigateButton";
import userEvent from '@testing-library/user-event'

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))


describe('NavigateButton', () => {
    test('renders correctly', async () => {
        const mockedOnClick = jest.fn()
        const user = userEvent.setup()
        render(<NavigateButton
            name="Go"
            label="Go"
            route={"/home"}
            id="1"
            onClick={mockedOnClick}
        />)

        const button = screen.getByRole('button')
        await user.click(button)
        expect(mockedOnClick).toHaveBeenCalled()
    })
})