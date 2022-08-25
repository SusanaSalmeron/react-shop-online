import { createContext, useState } from "react";


//UpdateAddressContext
const UpdateAddressContext = createContext()

export function UpdateAddressContextProvider({ children }) {
    const [address, setAddress] = useState({})
    const [isBilling, setIsBilling] = useState(0)
    const [isDeleted, setIsDeleted] = useState(0)

    return (
        <UpdateAddressContext.Provider value={{ address, setAddress, isBilling, setIsBilling, isDeleted, setIsDeleted }}>
            {children}
        </UpdateAddressContext.Provider>
    )
}

export default UpdateAddressContext