import { render, screen } from "@testing-library/react"
import UserAccountMenu from "../components/UserAccountMenu/userAccountMenu";
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from "history";


describe('UserAccountMenu', () => {
    test('it renders ok', async () => {
        const user = userEvent.setup({
            skipPointerEventsCheck: true
        })
        const history = createMemoryHistory()

        render(
            <BrowserRouter history={history}>
                <UserAccountMenu />
            </BrowserRouter>
        )

        expect(await screen.findByRole('complementary')).toHaveClass('container')
        expect(await screen.findAllByRole('list')).toHaveLength(3)
        expect(await screen.findAllByRole('listitem')).toHaveLength(10)
        const links = await screen.findAllByRole('link')
        expect(links).toHaveLength(8)
        expect(links[0]).toHaveAttribute('href', '/data')
        expect(links[1]).toHaveAttribute('href', '/address')
        expect(links[2]).toHaveAttribute('href', '/password')
        expect(links[3]).toHaveAttribute('href', '/orders')
        expect(links[4]).toHaveAttribute('href', '/inprocess')
        expect(links[5]).toHaveAttribute('href', '/shipped')
        expect(links[6]).toHaveAttribute('href', '/wishlist')
        user.click(links[0])
        /* await waitFor(() => {
            expect(history.location.pathname).toEqual('/data')
        }) */
        expect(await screen.findByRole('button')).toBeInTheDocument()

    })
    test('it has My Reviews option', async () => {
        const history = createMemoryHistory()

        render(
            <BrowserRouter history={history}>
                <UserAccountMenu />
            </BrowserRouter>
        )
        const allLinks = await screen.findAllByRole('link')
        const targetLinks = allLinks.filter(link => link.getAttribute("href") === '/reviews')
        expect(targetLinks[0]).toHaveAttribute('href', '/reviews')
    })
})