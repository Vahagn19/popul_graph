import {createContext } from "react";
import { useState } from "react";

export const ErrorContext = createContext()

const ErrorProvider = ({children})=>{

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("")

    const defaultProps = {
        error,
        setError,
        errorMessage,
        setErrorMessage
    }
    return (
        <ErrorContext.Provider value={defaultProps}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorProvider