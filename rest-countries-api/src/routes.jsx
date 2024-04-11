import  Homepage  from "./Pages/Homepage/Homepage.jsx"
import  Detailpage  from "./Pages/Detailpage/Detailpage.jsx"
import { createBrowserRouter } from 'react-router-dom'

// routes 
const router = createBrowserRouter([
    {
      path:"/",
      element: <Homepage/>
    },
    {
      path:"/Details",
      element: <Detailpage/>
    }
])

export default router;