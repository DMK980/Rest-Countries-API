import  Homepage  from "./Pages/Homepage/Homepage"
import  Detailpage  from "./Pages/Detailpage/Detailpage"
import { createBrowserRouter } from 'react-router-dom'
// routes 
export const router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage/>
    },
    {
      path:"/Details",
      element: <Detailpage/>
    }
])

// export router;