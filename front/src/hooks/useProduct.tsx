import { useContext } from "react"
import { ProductContext } from "../providers/productProvider"

export const useProduct = () => {
    const productContext = useContext(ProductContext)

    return productContext
}