import { render, screen } from "@testing-library/react"
import OrderCard from "../components/OrderCard/orderCard"

const product = {
    product_brand: "Natasha Denona",
    product_name: "Biba Palette",
    product_colour: "Biba Palette",
    units: 1,
    price: 129,
    product_total: 129
}

describe('OrderCard', () => {
    test('renders ok', async () => {
        render(<OrderCard product={product} />)
        expect(await screen.findByText("Natasha Denona")).toBeInTheDocument()
        expect(await screen.findAllByText('Biba Palette')).toHaveLength(2)
        expect(await screen.findByText('1')).toBeInTheDocument()
        expect(await screen.findAllByText("129€")).toHaveLength(2)
    })
})