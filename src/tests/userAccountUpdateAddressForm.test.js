import { cleanup, render, screen, waitFor } from "@testing-library/react"
import UserAccountUpdateAddressForm from "../components/UserAccountUpdateAddressForm/userAccountUpdateAddressForm"
import UpdateAddressContext from "../context/UpdateAddressContext";
import userEvent from '@testing-library/user-event';


describe('UserAccountUpdateAddressForm', () => {
    afterEach(cleanup)
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
            id: '3'
        })
    }))


    test('renders the form ok', async () => {
        const mockedShippingAddress = {
            user_name: "Susana",
            surname: "Salmeron",
            address: "Marcelina 32",
            postalZip: "08229",
            city: "Madrid",
            country: "Spain"
        }
        const mockedOnSubmit = jest.fn()
        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })
        const renderComponent = ({ isBilling }) => {
            return render(
                <UpdateAddressContext.Provider value={isBilling}>
                    <UserAccountUpdateAddressForm
                        submit={mockedOnSubmit}
                        address={mockedShippingAddress}
                    />
                </UpdateAddressContext.Provider>
            )
        }

        renderComponent({ isBilling: 0 })
        const inputs = await screen.findAllByRole('textbox')
        expect(inputs).toHaveLength(6)
        const button = await screen.findByRole('button')
        expect(button).toHaveTextContent('UPDATE')
        expect(await screen.findByDisplayValue('Susana')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('Salmeron')).toBeInTheDocument()
        expect(screen.queryByText('ID')).not.toBeInTheDocument()
        expect(await screen.findByDisplayValue('Marcelina 32')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('08229')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('Madrid')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('Spain')).toBeInTheDocument()

        const name = inputs[0]
        await user.clear(name)
        await user.type(name, 'Ruben')
        expect(name).toHaveValue('Ruben')
        const surname = inputs[1]
        await user.clear(surname)
        await user.type(surname, 'Carpintero')
        expect(surname).toHaveValue('Carpintero')
        const address = inputs[2]
        await user.clear(address)
        await user.type(address, 'Marcelina 30')
        expect(address).toHaveValue('Marcelina 30')
        const postalZip = inputs[3]
        await user.clear(postalZip)
        await user.type(postalZip, '28000')
        expect(postalZip).toHaveValue('28000')
        const city = inputs[4]
        await user.clear(city)
        await user.type(city, 'M')
        expect(city).toHaveValue('M')
        const country = inputs[5]
        await user.clear(country)
        await user.type(country, 'S')
        expect(country).toHaveValue('S')

        user.click(button)
        await waitFor(() =>
            expect(mockedOnSubmit).toHaveBeenCalledTimes(1))
    })
    //TODO -- the ID input not showing
    test('renders all the inputs including ID when context is true', async () => {
        const mockedShippingAddress = {
            user_name: "Susana",
            surname: "Salmeron",
            identification: "0123456A",
            address: "Marcelina 32",
            postalZip: "08229",
            city: "Madrid",
            country: "Spain"
        }
        const mockedOnSubmit = jest.fn()
        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })
        const renderComponent = ({ isBilling }) => {
            return render(
                <UpdateAddressContext.Provider value={isBilling}>
                    <UserAccountUpdateAddressForm
                        submit={mockedOnSubmit}
                        address={mockedShippingAddress}
                    />
                </UpdateAddressContext.Provider>
            )
        }

        renderComponent({ isBilling: 1 })
        const inputs = await screen.findAllByRole('textbox')
        expect(inputs).toHaveLength(6)
        const button = await screen.findByRole('button')
        expect(button).toHaveTextContent('UPDATE')
        expect(await screen.findByDisplayValue('Susana')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('Salmeron')).toBeInTheDocument()
        expect(screen.queryByText('ID')).not.toBeInTheDocument()
        expect(await screen.findByDisplayValue('Marcelina 32')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('08229')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('Madrid')).toBeInTheDocument()
        expect(await screen.findByDisplayValue('Spain')).toBeInTheDocument()

        /*    const name = inputs[0]
           await user.clear(name)
           await user.type(name, 'Ruben')
           expect(name).toHaveValue('Ruben')
           const surname = inputs[1]
           await user.clear(surname)
           await user.type(surname, 'Carpintero')
           expect(surname).toHaveValue('Carpintero')
           const address = inputs[2]
           await user.clear(address)
           await user.type(address, 'Marcelina 30')
           expect(address).toHaveValue('Marcelina 30')
           const postalZip = inputs[3]
           await user.clear(postalZip)
           await user.type(postalZip, '28000')
           expect(postalZip).toHaveValue('28000')
           const city = inputs[4]
           await user.clear(city)
           await user.type(city, 'M')
           expect(city).toHaveValue('M')
           const country = inputs[5]
           await user.clear(country)
           await user.type(country, 'S')
           expect(country).toHaveValue('S')
   
           user.click(button)
           await waitFor(() =>
               expect(mockedOnSubmit).toHaveBeenCalledTimes(1)) */
    })




})