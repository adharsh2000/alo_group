import { Box } from '@mui/material'
import React from 'react'

const AdminEmpWorkSheet = () => {
  return (
    <Box mt={2}>
        <table style={{width:"100%",borderCollapse: 'collapse'}} border='2px solid black'>
          <tr style={{backgroundColor:'#1272A5',color:'#fff',padding:"10px"}}>
            <th>Login</th>
            <th>10am-12pm</th>
            <th>12pm-1.15pm</th>
            <th>2pm-4pm</th>
            <th>4pm-7pm</th>
            <th>Logout</th>
          </tr>
          <tr>
            <td>10.00 am</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>lorem ipsum</td>
            <td>7.30 pm</td>
          </tr>
        </table>
      </Box>
  )
}

export default AdminEmpWorkSheet