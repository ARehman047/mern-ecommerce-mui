import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cancelOrder, confirmOrder, deleteOrder, deliveredOrder, getOrders, shipOrder } from '../../state/AdminOrder/Action'
import { Avatar, AvatarGroup, Button, Card, CardHeader } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const OrderTable = () => {
  const dispatch = useDispatch()
  const { adminOrder } = useSelector(store => store)
  useEffect(() => {
    dispatch(getOrders())
  }, [adminOrder.confirmed, adminOrder.shipped, adminOrder.cancelled, adminOrder.delivered, adminOrder.deleted])

  const actualOrders = adminOrder.orders.orders

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOrderId, setSelectedOrderId] = useState(null)
  const open = Boolean(anchorEl);

  const handleClick = (event, orderID) => {
    setSelectedOrderId(orderID)
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleConfirmedOrder = () => {
    dispatch(confirmOrder(selectedOrderId))
    handleClose()
  }

  const handleShippedOrder = () => {
    dispatch(shipOrder(selectedOrderId))
    handleClose()
  }

  const handleDeliveredOrder = () => {
    dispatch(deliveredOrder(selectedOrderId))
    handleClose()
  }

  const handleCancelledOrder = () => {
    dispatch(cancelOrder(selectedOrderId))
    handleClose()
  }

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId))
  }

  return (
    <div>
      <Card>
        <CardHeader title='All Orders' sx={{ paddingY: 3, marginLeft: 1 }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
                <TableCell align="left">Update Status</TableCell>
                <TableCell align="left">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actualOrders?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>
                    <AvatarGroup>
                      {item?.orderItems?.map((orderItem) => (
                        <Avatar src={orderItem.product.imageUrl}></Avatar>
                      ))}
                    </AvatarGroup>

                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item?.orderItems?.map((orderItem) => (
                      <p>{orderItem.product.title}</p>
                    ))}
                  </TableCell>
                  <TableCell align="left">{item._id}</TableCell>
                  <TableCell align="left">{item.totalPrice}</TableCell>
                  <TableCell align="left">
                    <span
                      className={`text-white px-5 py-3 rounded-full 
                          ${item.orderStatus === 'pending' ? 'bg-gray-700' :
                          item.orderStatus === 'confirmed' ? 'bg-blue-600' :
                          item.orderStatus === 'cancelled' ? 'bg-red-600' :
                          item.orderStatus === 'delivered' ? 'bg-green-600' :
                          item.orderStatus === 'shipped' ? 'bg-yellow-600' :
                          'bg-gray-400'
                        }`}
                    >
                      {item.orderStatus}
                    </span>
                  </TableCell>
                  <TableCell align="left">
                    <Button
                      id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={(e) => handleClick(e, item._id)}
                    >
                      Status
                    </Button>
                    <Menu
                      id="basic-menu"
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      MenuListProps={{
                        'aria-labelledby': 'basic-button',
                      }}
                    >
                      <MenuItem onClick={() => { handleConfirmedOrder(item._id) }}>Confirmed</MenuItem>
                      <MenuItem onClick={() => { handleShippedOrder(item._id) }}>Shipped</MenuItem>
                      <MenuItem onClick={() => { handleDeliveredOrder(item._id) }}>Delivered</MenuItem>
                      <MenuItem onClick={() => { handleCancelledOrder(item._id) }}>Cancelled</MenuItem>
                    </Menu>
                  </TableCell>
                  <TableCell align="left">
                    <button onClick={() => { handleDeleteOrder(item._id) }} className='border-red-800 rounded-md bg-red-200 px-4 py-2 border-2 font-semibold text-red-800 hover:bg-red-400'>Delete</button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  )
}

export default OrderTable