import { Route, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import { Home } from '../views/home'
import { Faqs } from '../views/FAQs/FAQs'
import { Utility } from '../views/utility/utility'
import { Revenue } from '../views/revenue/revenue'

const Routeconfig = () => {
    return (
      <Routes>
          <Route path = "/" element = {<Home />} />
          <Route path = "/faqs" element = {<Faqs />} />
          <Route path = "/utility" element = {<Utility />} />
          <Route path = "/revenue" element = {<Revenue />} />
      </Routes>
    )
}

const router = createBrowserRouter([{ path: "*", Component:Routeconfig }])

export const AppRoutes = () => {
    return <RouterProvider router = {router} />
}