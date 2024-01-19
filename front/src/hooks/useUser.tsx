import { useContext } from "react"
import { UserContext } from "../providers/userProvider"

export const useUser = () => {
    const userContext = useContext(UserContext)

    return userContext
}