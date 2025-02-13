import './App.css'
import { Route, Routes } from 'react-router-dom'
import CustomerRoutes from './Routes/CustomerRoutes'
import AdminRoutes from './Routes/AdminRoutes'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/*' element={<CustomerRoutes />}></Route>
        <Route path='/admin/*' element={<AdminRoutes/>}></Route>
      </Routes>


    </div>
  )
}

export default App
