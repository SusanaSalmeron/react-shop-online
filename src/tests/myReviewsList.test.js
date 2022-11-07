import { render, screen } from "@testing-library/react"
import MyReviewsList from "../components/MyReviewsList/myReviewsList";

const mockedNavigate = jest.fn()

const mockedReviews = {
    pending: [{ productId: 1, productName: "Biba Palette" }],
    created: [{
        id: 1,
        productId: 2,
        productName: "Pastel Palette",
        rating: 5,
        comment: "ygldsuhfgohkgkfjihlgdoijfpkjsf"
    }]
}

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 2
    }),
    useNavigate: () => mockedNavigate
}))

describe('MyReviewsList', () => {
    const userAccountService = require('../services/userAccountService')
    test('show reviews and pending reviews', async () => {
        const mockedGetUserReviews = jest.spyOn(userAccountService, 'getUserReviews').mockResolvedValue(mockedReviews)
        render(<MyReviewsList />)

        const buttons = await screen.findAllByRole('button')
        expect(buttons).toHaveLength(4)
        expect(buttons[2]).toHaveAccessibleName("UPDATE")
        expect(buttons[3]).toHaveAccessibleName("REVIEW")
        expect(mockedGetUserReviews).toHaveBeenCalledWith(2)
        expect(await screen.findByText('Biba Palette')).toBeInTheDocument()
        expect(await screen.findByText('Pastel Palette')).toBeInTheDocument()
        expect(await screen.findByText('Rating: 5')).toBeInTheDocument()
        expect(await screen.findByText('ygldsuhfgohkgkfjihlgdoijfpkjsf')).toBeInTheDocument()
    })
})