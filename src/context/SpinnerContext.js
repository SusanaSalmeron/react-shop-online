import { createContext, useState } from "react";

const SpinnerContext = createContext()

export function SpinnerContextProvider({ children }) {
    const [spinnerDisplay, setSpinnerDisplay] = useState(true)

    return (
        <SpinnerContext.Provider value={{ spinnerDisplay, setSpinnerDisplay }}>
            {children}
        </SpinnerContext.Provider>
    )
}

export default SpinnerContext