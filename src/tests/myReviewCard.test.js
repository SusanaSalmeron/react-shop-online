import { render, screen } from "@testing-library/react"
import MyReviewCard from "../components/MyReviewCard/myReviewCard";
import userEvent from '@testing-library/user-event'

const review = {
    product_name: "Biba Palette",
    rating: 5,
    comments: "dsafgshdjfkgljhsgafAGSHDJFKGLFJDHSGAF"
}
const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe('MyReviewCard', () => {
    test('renders ok', async () => {
        const user = userEvent.setup()
        render(
            <MyReviewCard review={review} />)

        expect(await screen.findByText('Biba Palette')).toBeInTheDocument()
        expect(await screen.findByText('Rating: 5')).toBeInTheDocument()
        expect(await screen.findByText('Comments: dsafgshdjfkgljhsgafAGSHDJFKGLFJDHSGAF')).toBeInTheDocument()
        const button = await screen.findByRole('button')
        expect(button).toHaveAccessibleName('UPDATE')
        await user.click(button)
        expect(mockedNavigate).toHaveBeenCalled()
    })
})