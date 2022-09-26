import { render, screen, waitFor } from "@testing-library/react"
import UserAccountData from "../components/UserAccountData/userAccountData";
import { BrowserRouter as Router } from 'react-router-dom';

import userEvent from '@testing-library/user-event';

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({ id: '3' }),
    useNavigate: () => mockNavigate
}))


describe('UserAccountData', () => {
    const userAccountService = require('../services/userAccountService')
    const popUpAlert = require('../utils/popUpAlert')

    test('renders form ok', async () => {
        const mockedPopUp = jest.spyOn(popUpAlert, "popUpAlert")
        const mockedUpdateData = jest.spyOn(userAccountService, 'updateUserAccountData').mockResolvedValue(true)
        const mockedUserAccount = jest.spyOn(userAccountService, 'getUserData').mockResolvedValue({
            user_name: "Susana",
            surname: "Salmeron",
            identification: "1234567A",
            date_of_birth: "04/05/1976",
            email: "mamama@gmail.com",
            phone: "12345678"
        })

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        const { rerender } = render(
            <Router>
                <UserAccountData />
            </Router>
        )

        expect(screen.getByText('My Data')).toBeInTheDocument()
        expect(await screen.findByLabelText('Name')).toBeInTheDocument()
        expect(await screen.findByLabelText('Last Name')).toBeInTheDocument()
        expect(await screen.findByLabelText('ID')).toBeInTheDocument()
        expect(await screen.findByLabelText('Date of Birth')).toBeInTheDocument()
        expect(await screen.findByLabelText('Email')).toBeInTheDocument()
        expect(await screen.findByLabelText('Phone number')).toBeInTheDocument()
        const inputs = await screen.findAllByRole('textbox')
        expect(inputs).toHaveLength(6)
        expect(mockedUserAccount).toHaveBeenCalled()

        rerender(
            <Router>
                <UserAccountData />
            </Router>
        )

        expect(inputs[0]).toHaveValue("Susana")
        expect(inputs[1]).toHaveValue("Salmeron")
        expect(inputs[2]).toHaveValue("1234567A")
        expect(inputs[3]).toHaveValue("04/05/1976")
        expect(inputs[4]).toHaveValue("mamama@gmail.com")
        expect(inputs[5]).toHaveValue("12345678")

        await user.clear(inputs[0])
        await user.type(inputs[0], 'Ruben')
        expect(inputs[0]).toHaveValue("Ruben")
        await user.clear(inputs[1])
        await user.type(inputs[1], 'Carpintero')
        expect(inputs[1]).toHaveValue("Carpintero")
        await user.clear(inputs[2])
        await user.type(inputs[2], '0987654Z')
        expect(inputs[2]).toHaveValue("0987654Z")
        await user.clear(inputs[3])
        await user.type(inputs[3], '26/03/1982')
        expect(inputs[3]).toHaveValue("26/03/1982")
        await user.clear(inputs[4])
        await user.type(inputs[4], 'lalalala@gmail.com')
        expect(inputs[4]).toHaveValue("lalalala@gmail.com")
        await user.clear(inputs[5])
        await user.type(inputs[5], "+3409876540")
        expect(inputs[5]).toHaveValue("+3409876540")

        const button = screen.getByRole('button')
        expect(button).toHaveAccessibleName('UPDATE')
        user.click(button)
        await waitFor(() => {
            expect(mockedUpdateData).toHaveBeenCalledWith("3", "Ruben", "Carpintero", "0987654Z", "26/03/1982", "lalalala@gmail.com", "+3409876540")
        })
        await waitFor(() => {
            expect(mockedPopUp).toHaveBeenCalledWith('center', 'success', 'Your data has beeen updated', false, 2000)
        })
    })
})