

describe('UserAddressForm', () => {
    jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useNavigate: () => mockedNavigate,
        useParams: () => ({
            id: '3'
        })
    }))
    const mockedNavigate = jest.fn()

    test('renders the form ok', async () => {



    })

})