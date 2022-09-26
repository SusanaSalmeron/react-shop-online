import { cleanup, render, screen, waitFor } from "@testing-library/react"
import UserAccountPassword from "../components/UserAccountPassword/userAccountPassword"
import userEvent from "@testing-library/user-event"

const mockNavigate = jest.fn()


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useParams: () => ({
        id: "3"
    })
}))

describe('UserAccountPassword', () => {
    afterEach(cleanup)
    const userAccountService = require('../services/userAccountService')
    const popUpAlert = require('../utils/popUpAlert')

    test('it renders the form ok', async () => {
        const mockedUpdatePassword = jest.spyOn(userAccountService, 'updateUserAccountPassword').mockResolvedValue(true)
        const mockedPopUp = jest.spyOn(popUpAlert, "popUpAlert")

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        render(<UserAccountPassword />)

        const password = await screen.findByPlaceholderText('Write your actual password')
        expect(password).toBeInTheDocument()
        const newPass = await screen.findByPlaceholderText('Write your new password')
        expect(newPass).toBeInTheDocument()
        const repeatPass = await screen.findByPlaceholderText('Repeat new password')
        expect(repeatPass).toBeInTheDocument()
        const button = await screen.findByRole('button')
        expect(button).toBeInTheDocument()
        await user.type(password, 'Abcdef123!')
        expect(password).toHaveValue('Abcdef123!')
        await user.type(newPass, 'Zxcvb987!')
        expect(newPass).toHaveValue('Zxcvb987!')
        await user.type(repeatPass, 'Zxcvb987!')
        expect(repeatPass).toHaveValue('Zxcvb987!')
        user.click(button)

        await waitFor(() => {
            expect(mockedUpdatePassword).toHaveBeenCalledWith('3', 'Abcdef123!', 'Zxcvb987!', 'Zxcvb987!')
        })
        await waitFor(() => {
            expect(mockedPopUp).toHaveBeenCalledWith("center", "success", 'Your password has been changed', false, 2000)
        })
    })
})