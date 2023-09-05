import { Box } from '@mui/material'
import React from 'react'

const ProjectStatusBox = ({value,bgcolor}) => {
  return (
    <Box display="inline-block" sx={{
        p:1,
        backgroundColor:bgcolor,
        my:1,
        mr:3,
    }}>{value}</Box>
  )
}

export default ProjectStatusBox