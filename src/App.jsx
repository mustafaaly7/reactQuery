import axios from 'axios'
import './App.css'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router'

function App() {

  // now if we wanna fetch the api we gotta make a use effect for getting the api then making a state to store it
  // then we gotta make another state for loader then another for error handling then conditions etc 
  // react query can handle all that by itself 
  // process? first install there libray by going to tanstack query and install it then go to main.jsx file and make entire web query client provide children


// Now example how it works 
const fetchingApi = ()=>{
const res = axios.get("https://fakestoreapi.com/products")
const output = res.data
console.log(output);

return res // axios return an object that has the api data in key name data so always axios.data

}

const{data : products ,isLoading ,isError}= useQuery({ // now data: products means im destructuring the data key from object and changing the key name from data to products
  queryKey : ["myProducts"], // this will store the api in our cache means memory mai
  queryFn : fetchingApi, // and this takes the function it gives status data and loading etc all by itself better than use state
})
console.log("products" ,products);
const navigate = useNavigate()
  return (
    <>

{isLoading? 
  <h1 className='text-center text-6xl'>Loadingg...</h1>: null}
  {products?.data?.map((product,ind)=>( // why we using question mark after product means till the api stored in our variable tb tk undefined aiga tou undefined nh dikhain iske liye question mark use krte ky false value ain tou render hi na krein jb tk true na ain value
    <h1 key={ind} className='text-center  my-2' onClick={()=>navigate(`/product/${product.id}`)}>{product.title}</h1>
  ))}



    </>
  )
}

export default App
