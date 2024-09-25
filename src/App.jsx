import axios from 'axios'
import './App.css'
import { useQuery } from '@tanstack/react-query'

function App() {

  // now if we wanna fetch the api we gotta make a use effect for getting the api then making a state to store it
  // then we gotta make another state for loader then another for error handling then conditions etc 
  // react query can handle all that by itself 
  // process? first install there libray by going to tanstack query and install it then go to main.jsx file and make entire web query client provide children


// Now example how it works 
const fetchingApi = ()=>{
const res = axios.get("https://fakestoreapi.com/products")
return res // axios return an object that has the api data in key name data so always axios.data

}

const{data : products ,isLoading ,isError}= useQuery({ // now data: products means im destructuring the data key from object and changing the key name from data to products
  queryKey : ["myProducts"],
  queryFn : fetchingApi,
})
console.log(products?.data);

  return (
    <>




    </>
  )
}

export default App
