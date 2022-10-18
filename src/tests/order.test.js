const { render, screen, waitFor } = require('@testing-library/react')
const { default: Order } = require('../components/Order/order')

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: "1",
        orderid: "1"
    })
}))

const order = {
    orderId: 1,
    name: "Susana",
    surname: "Salmeron",
    address: "Marcelina 32",
    postalZip: "28029",
    city: "Madrid",
    country: "Spain",
    orderDate: "02/09/2022",
    status: "shipped",
    products: [
        {
            product_name: "Biba Palette",
            product_brand: "Natasha Denona",
            product_colour: "Biba Palette",
            price: 129,
            units: 1,
            products_total: 129
        }
    ],
    totalOrder: 129
}

const user = {
    id: 1,
    name: "Susana",
    surname: "Salmeron",
    address: "Marcelina 32",
    postalZip: "28029",
    city: "Madrid",
    country: "Spain",
    phone: "667897654",
    email: "mamamama@gmail.com",
    dateOfBirth: "04/05/1976",
    identification: "12345678U",
    password: "Abcdef123!"
}


describe('Order', () => {
    const userAccountService = require('../services/userAccountService')
    test('renders ok', async () => {
        const mockedGetOrder = jest.spyOn(userAccountService, 'getOrder').mockResolvedValue(order)
        const mockedGetUserData = jest.spyOn(userAccountService, "getUserData").mockResolvedValue(user)

        render(<Order />)

        const titles = await screen.findAllByRole('heading')
        expect(titles).toHaveLength(3)
        await waitFor(() => {
            expect(titles[0]).toHaveTextContent('ORDER Nº 1')
        })
        expect(titles[1]).toHaveTextContent('Billing Address')
        expect(titles[2]).toHaveTextContent('Shipping Address')
        expect(await screen.findByText('DATE: 02/09/2022')).toBeInTheDocument()
        expect(mockedGetUserData).toHaveBeenCalledWith("1")
        expect(mockedGetOrder).toHaveBeenCalledWith("1", "1")
        expect(screen.getByText('Natasha Denona')).toBeInTheDocument()
    })
})