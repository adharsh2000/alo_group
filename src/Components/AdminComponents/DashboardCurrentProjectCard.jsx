import { Avatar, AvatarGroup, Box, Typography, useTheme } from "@mui/material";
import React from "react";

const DashboardCurrentProjectCard = ({
  name,
  type,
  date,
  period,
  images,
  status,
}) => {
  const theme = useTheme();
  // const textColor = theme?.palette?.primary?.main;
  const shadow = theme?.shape?.shadow;
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      border="1px solid #A9A9A9"
      width="95%"
      mx="auto"
      borderRadius="10px"
      boxShadow={shadow}
      p={2}
      mt
    >
      <Box
        height={70}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
      >
        <Typography textAlign="center">Project Name</Typography>
        <Typography textAlign="center" fontWeight="bold">
          {name}
        </Typography>
      </Box>
      <Box
        height={70}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Typography textAlign="center">Project Type</Typography>
        <Typography textAlign="center" fontWeight="bold">
          {type}
        </Typography>
      </Box>
      <Box
        height={70}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Typography textAlign="center">Starting Date</Typography>
        <Typography textAlign="center" fontWeight="bold">
          {date}
        </Typography>
      </Box>
      <Box
        height={70}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Typography textAlign="center">Period</Typography>
        <Typography
          textAlign="center"
          fontWeight="bold"
        >{`${period} Days`}</Typography>
      </Box>
      <Box
        height={70}
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography textAlign="center">Employees</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>
      </Box>
      <Box
        height={70}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        gap={2}
        sx={{
          display: { xs: "none", sm: "flex" },
        }}
      >
        <Typography textAlign="center">Status</Typography>
        <Typography textAlign="center" fontWeight="bold">
          {status}
        </Typography>
      </Box>
    </Box>
  );
};

export default DashboardCurrentProjectCard;
