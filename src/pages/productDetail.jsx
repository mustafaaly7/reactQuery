import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router"


function ProductDetail() {
    const { id } = useParams()

    const fetchSingleProduct = () => {
        const res = axios.get(`https://fakestoreapi.com/products/${id}`)
        return res

    }

    const { data: product, isLoading, isError } = useQuery({
        queryKey: ["Product",id], // now we gotta give id in this key variable aswell so it wont overwrite cuz id change hoti rahegi and ye overwrite krdega if we wont give the id variable cuz whenever it changes it will create a new cache
        queryFn: fetchSingleProduct
    })

    return (
        <>
            {isLoading ? <h1 className="text-center my-6 text-6xl">Loading...</h1> : null}

            <h1>{product?.data.title}</h1>
        </>
    )
}
export {
    ProductDetail
}