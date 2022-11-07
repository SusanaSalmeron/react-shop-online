import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import CreateMyReviewForm from "../components/CreateMyReviewForm/createMyReviewForm";

const mockedNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    navigate: () => mockedNavigate
}))


describe('CreateMyReviewForm', () => {
    test('render form ok', async () => {
        render(<BrowserRouter><CreateMyReviewForm /></BrowserRouter>)

        const textarea = await screen.findByRole('textbox')
        expect(textarea).toHaveProperty('placeholder')


    })
})