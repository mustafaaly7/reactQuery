import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useParams } from "react-router"


function ProductDetail(){
const{id} = useParams()

const fetchSingleProduct =()=>{
const res = axios.get(`https://fakestoreapi.com/products/${id}`)
return res

}

const {data:product , isLoading ,isError } = useQuery({queryKey : ["Product"] , queryFn: fetchSingleProduct})

    return(
        <>
        {isLoading? <h1 className="text-center my-6 text-6xl">Loading...</h1>: null}

        <h1>{product?.data.title}</h1>
        </>
    )
}
export{
    ProductDetail
}