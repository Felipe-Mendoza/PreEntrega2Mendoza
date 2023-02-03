import { createContext, useContext, useState } from "react";
export const LoginContext = createContext()
export const useLoginContext = () => {
    return useContext(LoginContext)
}
const MOCK_USERS = [
    {
        email: 'felipe@mendoza.com',
        password: 'admin'
    },
    {
        email: 'felipe@madriz.com',
        password: 'admin'
    },
    {
        email: 'felipe@domingo.com',
        password: 'admin'
    },

]


export const LoginProvider = ({ children }) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: "Felipe@gmail.com",
        logged: true,//debe ir en false para que nos pida al momento de inggresar
        error: null

    })

    const login = (values) => {
        setLoading(true)
        setTimeout(() => {
            const match = MOCK_USERS.find(user => user.email === values.email && user.password === values.password)
            if (match) {
                setUser({
                    email: match.email,
                    logged: true,
                    error: null
                })
                setLoading(false)

            } else {
                setUser({
                    email: null,
                    logged: false,
                    error: 'los datos no son vallidos'
                })
                setLoading(false)
            }

        }, 1500)




    }
    const logout = () => {
        setUser({
            email: null,
            logged: false,
            error: null
        })

    }

    return (
        <LoginContext.Provider value={{ user, login, logout ,loading }}>
            {children}

        </LoginContext.Provider>
    )
}