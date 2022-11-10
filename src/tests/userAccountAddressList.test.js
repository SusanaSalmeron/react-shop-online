import { render, screen, waitFor } from "@testing-library/react";
import UserAccountAddressList from '../components/UserAccountAddressList/userAccountAddressList'
import UpdateAddressContext from "../context/UpdateAddressContext";
import userEvent from '@testing-library/user-event';


const mockNavigate = jest.fn()


jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate,
    useParams: () => ({
        id: "3"
    })
}))


describe('UserAccountAddressList', () => {
    const userAccountService = require('../services/userAccountService')
    const popUpAlert = require('../utils/popUpAlert')

    test('renders all addresses ok', async () => {
        const mockedSetIsBilling = jest.fn()
        const mockedSetShippingAddress = jest.fn()
        const mockGetUSerData = jest.spyOn(userAccountService, 'getUserData').mockResolvedValue({
            id: "3",
            userName: "Susana",
            surname: "Salmeron",
            address: "Calle Marcelina",
            postalZip: "28029",
            city: "Madrid",
            country: "Spain",
            phone: "+3488765432",
            email: "mamamama@gmail.com",
            date_of_Birth: "04/05/1976",
            identification: "34234567A",
            password: "Abcdef123!"
        })

        const mockedGetUserAddresses = jest.spyOn(userAccountService, 'getUserAddresses').mockResolvedValue([
            {
                id: "1",
                userName: "Susana",
                surname: "Salmeron",
                address: "Calle Marcelina",
                postalZip: "28029",
                city: "Madrid",
                country: "Spain",
                defaultAddress: true,
                userId: "3"
            }
        ])

        const mockedDeleteAddress = jest.spyOn(userAccountService, 'deleteAddress').mockResolvedValue(true)
        const mockedPopUpAlert = jest.spyOn(popUpAlert, 'popUpAlert')

        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })

        render(
            <UpdateAddressContext.Provider value={{ shippingAddress: "", setShippingAddress: mockedSetShippingAddress, isBilling: 0, setIsBilling: mockedSetIsBilling }}>
                <UserAccountAddressList />
            </UpdateAddressContext.Provider>
        )
        expect(await screen.findByText('My Billing Address')).toBeInTheDocument()
        expect(await screen.findByText('Default shipping address:')).toBeInTheDocument()
        expect(await screen.findByText('Addresses')).toBeInTheDocument()
        expect(mockGetUSerData).toHaveBeenCalledWith("3")
        expect(mockedGetUserAddresses).toHaveBeenCalledWith("3")
        expect(await screen.findAllByText('Susana Salmeron')).toHaveLength(2)
        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(4)
        user.click(buttons[2])
        await waitFor(() => {
            expect(mockedPopUpAlert).toHaveBeenCalledWith('center', 'success', 'Your address has been removed', false, 2000)
        })

        await waitFor(() => {
            expect(mockedDeleteAddress).toHaveBeenCalledWith("1", "3")
        })
        user.click(buttons[0])
        await waitFor(() => {
            expect(mockedSetIsBilling).toHaveBeenCalledWith(1)
        })
        await waitFor(() => {
            expect(mockedSetShippingAddress).toHaveBeenCalledWith({
                id: "3",
                userName: "Susana",
                surname: "Salmeron",
                address: "Calle Marcelina",
                postalZip: "28029",
                city: "Madrid",
                country: "Spain",
                phone: "+3488765432",
                email: "mamamama@gmail.com",
                date_of_Birth: "04/05/1976",
                identification: "34234567A",
                password: "Abcdef123!"
            })
        })
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('../addressForm')
        })
        user.click(buttons[1])
        await waitFor(() => {
            expect(mockedSetIsBilling).toHaveBeenCalledWith(0)
        })
        await waitFor(() => {
            expect(mockedSetShippingAddress).toHaveBeenCalledWith({
                id: "3",
                userName: "Susana",
                surname: "Salmeron",
                address: "Calle Marcelina",
                postalZip: "28029",
                city: "Madrid",
                country: "Spain",
                phone: "+3488765432",
                email: "mamamama@gmail.com",
                date_of_Birth: "04/05/1976",
                identification: "34234567A",
                password: "Abcdef123!"
            })
        })
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('../addressForm')
        })
        user.click(buttons[3])
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith('../newAddress')
        })
    })
})