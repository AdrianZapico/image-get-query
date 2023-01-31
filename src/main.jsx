import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider } from 'react-query'
import {queryClient} from './services/services'
import {createBrowserRouter,RouterProvider,Route} from 'react-router-dom'
import BigImg from './pages/BigImg/BigImg';
import Home from './pages/Home/Home'
import GlobalStyle from './styles/global'

const router = createBrowserRouter([
  {
    element: <App/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/bigimg/:id',
        element:<BigImg/>,
      }
    ]
  }
]

)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}/>
  <GlobalStyle/>
    </QueryClientProvider>
  </React.StrictMode>,
)
