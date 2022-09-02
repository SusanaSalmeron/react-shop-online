import { createContext, useState } from "react";


//UpdateAddressContext
const UpdateAddressContext = createContext()

export function UpdateAddressContextProvider({ children }) {
    const [shippingAddress, setShippingAddress] = useState({})
    const [isBilling, setIsBilling] = useState(0)

    return (
        <UpdateAddressContext.Provider value={{ shippingAddress, setShippingAddress, isBilling, setIsBilling }}>
            {children}
        </UpdateAddressContext.Provider>
    )
}

export default UpdateAddressContext