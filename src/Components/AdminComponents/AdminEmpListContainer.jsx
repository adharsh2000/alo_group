import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import EmpListCard from './EmpListCard';

const AdminEmpListContainer = () => {
    let count = 35;
  return (
    <>
    <Grid
        container
        item
        xs={12}
        sm={12}
        // display="flex"
        // alignItems="center"
        // justifyContent="center"

      >
        <Box width="100%" bgcolor="#fff" borderRadius="10px">
            <Typography fontWeight="bold" fontSize="20px" my={1} ml={2}>
                {`Employes List (${count})`}
            </Typography>
            <Divider />
            <Box width="100%" p={2} overflowY="auto">
                <EmpListCard />
                <EmpListCard />
                <EmpListCard />
                <EmpListCard />
                <EmpListCard />
                <EmpListCard />
                <EmpListCard />
                <EmpListCard />
            </Box>
        </Box>
      </Grid>
    </>
  )
}

export default AdminEmpListContainer