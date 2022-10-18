import { render, screen } from "@testing-library/react"
import UserAccountAddress from "../components/UserAccountAddress/UserAccountAddress"

let mockData

describe('UserAccountAddress', () => {

    test('it renders ok when there are addresses', async () => {
        mockData = {
            userName: "Susana",
            surname: "Salmeron",
            address: "Calle Marcelina 32",
            postalZip: "28029",
            city: "Madrid",
            country: "Spain",
            defaultAddress: true
        }

        render(<UserAccountAddress data={mockData} />)
        const h4 = await screen.findByRole('heading')
        expect(h4).toHaveTextContent('Default shipping address:')
        expect(await screen.findByText('Susana Salmeron')).toBeInTheDocument()
        expect(await screen.findByText("Calle Marcelina 32 28029 Madrid Spain")).toBeInTheDocument()
    })

    test('it not renders data when user does not have addresses', async () => {
        mockData = {}

        render(<UserAccountAddress data={mockData} />)

        expect(screen.queryByRole('heading')).not.toBeInTheDocument()
        expect(screen.queryByText('Susana Salmeron')).not.toBeInTheDocument()
        expect(screen.queryByText("Calle Marcelina 32 28029 Madrid Spain")).not.toBeInTheDocument()
    })
})