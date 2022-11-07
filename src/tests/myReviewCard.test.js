import { render, screen } from "@testing-library/react"
import MyReviewCard from "../components/MyReviewCard/myReviewCard";

const review = {
    productName: "Biba Palette",
    rating: 5,
    comment: "dsafgshdjfkgljhsgafAGSHDJFKGLFJDHSGAF"
}
const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe('MyReviewCard', () => {
    test('renders ok', async () => {
        render(
            <MyReviewCard review={review} />)

        const titles = await screen.findAllByRole('heading')
        expect(titles).toHaveLength(3)
        expect(titles[0]).toHaveTextContent("Biba Palette")
        expect(titles[1]).toHaveTextContent("5")
        expect(titles[2]).toHaveTextContent("Comments:")
        expect(await screen.findByText("dsafgshdjfkgljhsgafAGSHDJFKGLFJDHSGAF")).toBeInTheDocument()
    })
})