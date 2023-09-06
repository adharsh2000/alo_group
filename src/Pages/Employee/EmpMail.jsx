import React from 'react'
import { Box, useTheme } from '@mui/material'
import UserNavbar from '../../Components/UserComponents/UserNavbar'
import UserHeader from '../../Components/UserComponents/UserHeader'

const EmpMail = () => {
    const theme = useTheme();
    const bgColor = theme?.palette?.background?.default;
  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
    <Box display="flex">
      <UserNavbar />
    </Box>
    <Box ml={36}>
      <UserHeader />
      <Box display="flex">
        <Box>
            form
        </Box>
        <Box>
            all message
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default EmpMail