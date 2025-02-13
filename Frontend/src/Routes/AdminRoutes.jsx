import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Admin from '../admin/Admin'

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path='/*' element={<Admin />}></Route>
        </Routes>
    )
}

export default AdminRoutes