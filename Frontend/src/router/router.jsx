import AddPage from "../pages/AddPages";
import Basket from "../pages/Basket";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";

const ROUTER = [
    {
        path:"/",
        element:<MainRoot/>,
        children:[
            {
                path:"",
                element:<Home/>
            },
            {
                path:"/addproduct",
                element:<AddPage/>
            },
            {
                path:"/basket",
                element:<Basket/>
            }
        ]
    }
]

export default ROUTER