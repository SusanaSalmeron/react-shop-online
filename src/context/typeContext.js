import { createContext, useState } from "react";

const TypeContext = createContext()

export function TypeProvider({ children }) {
    const [type, setType] = useState("")

    return (
        <TypeContext.Provider value={{ type, setType }}>
            {children}
        </TypeContext.Provider>
    )
}

export default TypeContext