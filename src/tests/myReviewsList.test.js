import { render, screen } from "@testing-library/react"
import MyReviewsList from "../components/MyReviewsList/myReviewsList";

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: () => ({
        id: 2
    }),
    useNavigate: () => mockedNavigate
}))

describe('MyReviewsList', () => {
    const userAccountService = require('../services/userAccountService')
    test('renders ok', async () => {
        const mockedGetUserReviews = jest.spyOn(userAccountService, 'getUserReviews').mockResolvedValue([])
        render(<MyReviewsList />)

        expect(await screen.findByRole('heading')).toHaveAccessibleName("My reviews")
        expect(mockedGetUserReviews).toHaveBeenCalledWith(2)
        expect(mockedGetUserReviews).toHaveLength(0)


    })
})