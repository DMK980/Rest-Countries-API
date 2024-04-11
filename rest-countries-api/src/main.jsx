import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { Provider } from "react-redux"
import { RouterProvider } from 'react-router-dom'
import store from './State/store.jsx'
import router from './routes.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
