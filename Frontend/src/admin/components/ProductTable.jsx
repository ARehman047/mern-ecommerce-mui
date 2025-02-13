import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProduct, findProducts } from '../../state/Product/Action';
import { Avatar, Button, Card, CardHeader } from '@mui/material';

const ProductTable = () => {
  const dispatch = useDispatch()
  const { product } = useSelector(store => store)

  const actualProducts = product.products
  

  useEffect(() => {
    const data = {
      category: "mensKurta",
      color: [],
      sizes: [],
      minPrice: 0, maxPrice: 1000000,
      minDiscount: 0,
      sort: 'price_low',
      pageNumber: 1,
      pageSize: 10,
      stock: ""
    }
    dispatch(findProducts(data))
  }, [product.removeProduct])

  const handleProductDelete = (productId) => {
    dispatch(deleteProduct(productId))
  }

  return (
    <div>
      <Card>
        <CardHeader title='All Products' sx={{paddingY:3, marginLeft:1}}/>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Category</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Quantity</TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {actualProducts?.map((item) => (
                <TableRow
                  key={item.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell align='left'>
                    <Avatar src={item.imageUrl}></Avatar>
                  </TableCell>
                  <TableCell align='left' scope="row">
                    {item.title}
                  </TableCell>
                  <TableCell align="left">{item.category.name}</TableCell>
                  <TableCell align="left">{item.price}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left">
                    <button onClick={() => handleProductDelete(item._id)} className='border-red-800 rounded-md bg-red-200 px-4 py-2 border-2 font-semibold text-red-800 hover:bg-red-400'>Delete</button>
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

export default ProductTable