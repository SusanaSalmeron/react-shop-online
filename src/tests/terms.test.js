import { render, screen, waitFor } from "@testing-library/react"
import Terms from "../components/Terms/terms";
import userEvent from '@testing-library/user-event';


const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))


describe('Terms', () => {
    test('renders ok', async () => {

        const user = userEvent.setup()

        render(<Terms />)

        const titles = screen.getAllByRole('heading')
        expect(titles).toHaveLength(55)
        const lists = screen.getAllByRole('list')
        expect(lists).toHaveLength(2)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(3)
        const button = screen.getByRole('button')
        expect(button).toHaveAccessibleName('Return')

        user.click(button)
        await waitFor(() => {
            expect(mockNavigate).toHaveBeenCalledWith(-1)
        })
    })

})