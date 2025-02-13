import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Dashboard from './components/Dashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductTable from './components/ProductTable';
import OrderTable from './components/OrderTable';
import CustomerTable from './components/CustomerTable';

const menu = [
  { name: 'Dashboard', path: '/admin', icon: <DashboardIcon /> },
  { name: 'Products', path: '/admin/products', icon: <DashboardIcon /> },
  { name: 'Customers', path: '/admin/customers', icon: <DashboardIcon /> },
  { name: 'Orders', path: '/admin/orders', icon: <DashboardIcon /> },
  { name: 'AddProduct', path: '/admin/product/create', icon: <DashboardIcon /> }
]

const Admin = () => {
  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"))
  const [sideBarVisible, setSideBarVisible] = useState(false)
  const navigate = useNavigate()

  const drawer = (
    <Box sx={{ overflow: 'auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height:'100%', padding:'8px'}}>
      {isLargeScreen && <Toolbar />}
      <List>
        {menu.map((item, index) => (
          <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
            <ListItemButton>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText>
                {item.name}
              </ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <List>
        <ListItem disablePadding >
          <ListItemButton>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText>
              Account
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>

    </Box>
  )

  return (
    <div className='h-screen overflow-hidden'>
      <div className='flex h-[100vh] relative'>
        <CssBaseline />
        <div className='h-screen border border-r-gray-400 w-[15%] sticky top-0 overflow-y-auto'>
          {drawer}
        </div>
        <div className='w-[85%] m-3 overflow-auto h-screen'>
          <Routes>
            <Route path='/' element={<Dashboard/>}></Route>
            <Route path='/products' element={<ProductTable/>}></Route>
            <Route path='/orders' element={<OrderTable/>}></Route>
            <Route path='/customers' element={<CustomerTable/>}></Route>
            <Route path='/product/create' element={<CreateProductForm/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Admin