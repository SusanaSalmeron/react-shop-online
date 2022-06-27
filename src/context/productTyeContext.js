import { createContext, useState } from "react";

const ProductTypeContext = createContext

export function ProductTypeProvider({ children }) {
    const [productType, setProductType] = useState("")

    return (
        <ProductTypeContext.Provider value={{ productType, setProductType }}>
            {children}
        </ProductTypeContext.Provider>
    )
}

export default ProductTypeContext