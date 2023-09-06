import React from "react";
import { Box, Typography, useTheme } from "@mui/material";

const UserMailCard = ({ value,height }) => {
  const theme = useTheme();
  const boxShadow = theme?.shape?.shadow;

  const colorGenerate = (value) => {
    if (value === "Requested") {
      return "#1272A5";
    } else if (value === "Accepted") {
      return "#00FF1A";
    } else if (value === "Declined") {
      return "#FF0000";
    }
  };

  return (
    <Box
      width="100%"
      height={height ? height : 150}
      sx={!height && {
        border:'1px solid #000',
        borderRadius:'20px',
        mb:2,
        boxShadow:boxShadow
      }}
    //   border="1px solid #000"
    //   borderRadius="20px"
    //   mb={2}
    //   boxShadow={boxShadow}
    >
      <Box display="flex" justifyContent="space-between" px={2} py={2}>
        <Typography>Requested For Leave</Typography>
        <Typography color={colorGenerate(value)}>{value}</Typography>
      </Box>
      <Typography px={2}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia, corporis
        quidem libero illo exercitationem ab nihil necessitatibus eius
        consequuntur
      </Typography>
    </Box>
  );
};

export default UserMailCard;
