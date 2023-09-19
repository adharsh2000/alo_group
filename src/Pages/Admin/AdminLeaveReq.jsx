import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import filterIcon from "../../Icons/AdminIcons/FilterIcon.svg"

const AdminLeaveReq = () => {
  const theme = useTheme();
  const shadow = theme?.shape?.shadow;
  return (
    <>
      <Box
        p={1}
        width="60%"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        // bgcolor="red"
      >
        <Typography fontWeight="bold" fontSize="22px">
          Leave Requests
        </Typography>
        <Box sx={{
          display:'flex',
          gap:2,
          backgroundColor:"#fff",
          py:1,
          px:2,
          borderRadius:'10px',
          boxShadow:shadow,
        }}>
            <img src={filterIcon} alt="filter" width={20} />
          <select name="" id="" style={{outline:'none',border:"none"}}>
            <option value="">New</option>
            <option value="">Accepted</option>
            <option value="">Declined</option>
          </select>
        </Box>
      </Box>
    </>
  );
};

export default AdminLeaveReq;
