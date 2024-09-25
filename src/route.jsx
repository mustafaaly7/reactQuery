import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { ProductDetail } from "./pages/productDetail";



function Router() {

    return (

        <BrowserRouter>
            <Routes>
                <Route index element={<App />} />
<Route path={"/product/:id"} element={<ProductDetail/>} />

            </Routes>
        </BrowserRouter>


    )

}
export {
    Router
}