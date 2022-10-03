import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewAddressForm from '../components/NewAddressForm/newAddressForm';

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: "3"
    })
}))


describe('NewAddressForm', () => {
    const userAccountService = require('../services/userAccountService')
    const popUpAlert = require('../utils/popUpAlert')
    test('renders ok', async () => {
        const mockedNewShippingAddress = jest.spyOn(userAccountService, 'newShippingAddress').mockResolvedValue("5")
        const mockedPopUpAlert = jest.spyOn(popUpAlert, 'popUpAlert')

        const user = userEvent.setup()

        render(<NewAddressForm />)

        const title = screen.getByRole('heading')
        expect(title).toHaveAccessibleName("New Shipping Address")
        const inputs = screen.getAllByRole('textbox')
        expect(inputs).toHaveLength(6)
        const checkbox = screen.getByRole('checkbox')
        const button = screen.getByRole('button')
        expect(button).toHaveAccessibleName('ADD ADDRESS')

        await user.type(inputs[0], "Susana")
        await user.type(inputs[1], "Salmeron")
        await user.type(inputs[2], "Calle Marcelina 32")
        await user.type(inputs[3], "28029")
        await user.type(inputs[4], "Madrid")
        await user.type(inputs[5], "Spain")
        expect(checkbox.checked).toEqual(false)
        await user.click(checkbox)
        expect(inputs[0]).toHaveValue("Susana")
        expect(inputs[1]).toHaveValue("Salmeron")
        expect(inputs[2]).toHaveValue("Calle Marcelina 32")
        expect(inputs[3]).toHaveValue("28029")
        expect(inputs[4]).toHaveValue("Madrid")
        expect(inputs[5]).toHaveValue("Spain")
        expect(checkbox.checked).toEqual(true)
        await user.click(button)
        expect(mockedNewShippingAddress).toHaveBeenCalledWith('3', 'Susana', 'Salmeron', 'Calle Marcelina 32', '28029', 'Madrid', 'Spain', true)
        expect(mockedPopUpAlert).toHaveBeenCalledWith("center", "success", "Address created successfully", false, 2000)
    })
})