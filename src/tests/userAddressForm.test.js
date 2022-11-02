import { render, screen } from "@testing-library/react"
import UserAddressForm from "../components/UserAddressForm/userAddressForm"
import UpdateAddressContext from "../context/UpdateAddressContext";
import userEvent from '@testing-library/user-event'

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate,
    useParams: () => ({
        id: '3'
    })
}))

const mockedShippingAddress = {
    id: 1,
    userName: "Susana",
    surname: "Salmeron",
    identification: "1234567Z",
    address: "Marcelina 32",
    postalZip: "28029",
    city: "Madrid",
    country: "Spain",
    defaultAddress: true,
    userId: 3
}


describe('UserAddressForm', () => {
    const userAccountService = require('../services/userAccountService')
    test('renders the form ok', async () => {
        const mockedSetIsBilling = jest.fn()
        const mockedSetShippingAddress = jest.fn()
        const mockUpdateUserAccountBillingAddress = jest.spyOn(userAccountService, 'updateUserAccountBillingAddress').mockResolvedValue(true)

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })
        render(
            <UpdateAddressContext.Provider value={{ shippingAddress: mockedShippingAddress, setShippingAddress: mockedSetShippingAddress, isBilling: 1, setIsBilling: mockedSetIsBilling }}>
                <UserAddressForm />
            </UpdateAddressContext.Provider>)

        expect(screen.getByText('My Billing Address')).toBeInTheDocument()
        expect(screen.getAllByRole('textbox')).toHaveLength(7)
        expect(await screen.findByText('ID')).toBeInTheDocument()
        const button = await screen.findByRole('button')
        user.click(button)

        //TODO not working submitBillingAddressChange
        /* await waitFor(() => {
            expect(mockUpdateUserAccountBillingAddress).toHaveBeenCalledWith(3, "Susana", "Salmeron", "", "Marcelina 32", "28029", "Madrid", "Spain")
        })
 */



    })

})