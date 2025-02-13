import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Card, CardHeader } from '@mui/material';
import { api } from '../../config/apiConfig';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const handleDelete = async(userId) => {
    await api.delete(`/api/users/${userId}`)
}

const CustomerTable = () => {
  const [allUsers, setAllUsers] = useState([])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  useEffect(() => {
    (async () => {
      const { data } = await api.get('/api/users')
      setAllUsers(data)

    })()

  }, [handleDelete()])
  
  

  return (
    <div>
      <Card>
        <CardHeader title='All Customers' sx={{ paddingY: 3, marginLeft: 1 }} />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="left">Email</TableCell>
                <TableCell align="left"></TableCell>
                <TableCell align="left"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allUsers?.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.firstName} {row.lastName}
                  </TableCell>
                  <TableCell align="left">{row.email}</TableCell>
                  <TableCell align="left">
                    <button onClick={handleOpen} className='border-blue-800 rounded-md bg-blue-200 px-4 py-2 border-2 font-semibold text-blue-800 hover:bg-blue-300'>Display Addresses</button>
                    <Modal
                      open={open}
                      onClose={handleClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >
                      <Box sx={style}>
                        {row?.address?.map((address) => (
                          <div className='p-3 border border-gray-400 my-3'>
                            <p className='font-bold'>{address.firstName} {address.lastName}</p>
                            <p>{address.streetAddress}, {address.city}, {address.state}</p>
                            <p>{address.mobile}</p>
                          </div>
                        ))}
                      </Box>
                    </Modal>
                  </TableCell>
                  <TableCell align="left">
                    <button onClick={() => handleDelete(row._id)} className='border-red-800 rounded-md bg-red-200 px-4 py-2 border-2 font-semibold text-red-800 hover:bg-red-400'>Delete</button>
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

export default CustomerTable