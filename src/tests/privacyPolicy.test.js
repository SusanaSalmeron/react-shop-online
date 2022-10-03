import { render, screen, waitFor } from "@testing-library/react";
import PrivacyPolicy from "../components/PrivacyPolicy/privacyPolicy";
import userEvent from '@testing-library/user-event'

const mockedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedNavigate
}))

describe('PrivacyPolicy', () => {
    test('renders ok', async () => {
        const user = userEvent.setup()

        render(<PrivacyPolicy />)

        const titles = screen.getAllByRole('heading')
        expect(titles).toHaveLength(14)
        const lists = screen.getAllByRole('list')
        expect(lists).toHaveLength(3)
        const listItems = screen.getAllByRole('listitem')
        expect(listItems).toHaveLength(14)
        const button = screen.getByRole('button')
        expect(button).toHaveAccessibleName('Return')
        user.click(button)
        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith(-1)
        })
    })
})