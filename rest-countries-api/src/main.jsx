import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { RouterProvider } from "react-router-dom"
import store from './State/store.js'
import router from './routes.js'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <RouterProvider router={router}/>
    {/* </Provider> */}
  </React.StrictMode>
)
