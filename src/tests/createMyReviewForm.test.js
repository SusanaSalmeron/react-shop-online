import { render, screen } from "@testing-library/react"
import CreateMyReviewForm from "../components/CreateMyReviewForm/createMyReviewForm"


describe('CreateMyReviewForm', () => {
    test('render form ok', async () => {
        render(<CreateMyReviewForm />)

        const textarea = await screen.findByRole('textbox')
        expect(textarea).toHaveProperty('placeholder')
        const select = await screen.findByRole('combobox')

    })
})