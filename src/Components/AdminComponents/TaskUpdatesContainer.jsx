import React from "react";
import {
  Avatar,
  Box,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import RightArrow from "../../Icons/AdminIcons/RightArrow.svg";
import { Link } from "react-router-dom";

const TaskUpdatesContainer = () => {
  const theme = useTheme();
  const textColor = theme?.palette?.primary?.main;
  const shadow = theme?.shape?.shadow;
  return (
    <Box
      bgcolor="#fff"
      width="99%"
      //   height={400}
      height="auto"
      minHeight={350}
      borderRadius="20px"
      sx={{
        mb: { xs: 2, sm: 0 },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={1}
      >
        <Typography fontWeight="bold">Task updates</Typography>
        <Box display="flex">
          <Link to="/admin/emplist" style={{ textDecoration: "none" }}>
            <Typography fontWeight="bold" color={textColor}>
              View All
            </Typography>
          </Link>
          <img src={RightArrow} alt="view/all" />
        </Box>
      </Box>
      <Divider />
      <Box>
        <Grid
          container
          xs={12}
          sm={12}
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          sx={{
            mx: { xs: 1, sm: "" },
          }}
        >
          {/* <Grid item xs={6} sm={4} md={3} p={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              width={150}
              height={150}
              borderRadius="20px"
              bgcolor="#EEF7FD"
              boxShadow={shadow}
            >
              <Avatar src="" />
              <Typography>Lorem ipsum</Typography>
              <Typography>Flutter</Typography>
              <Typography>Bug fixing</Typography>
            </Box>
          </Grid> */}

          {Array.from({ length: 8 }).map((_, index) => (
            <Grid item key={index} xs={6} sm={4} md={3} p={2}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                width={150}
                height={150}
                borderRadius="20px"
                bgcolor="#EEF7FD"
                boxShadow={shadow}
              >
                <Avatar
                  src="https://mui.com/static/images/avatar/2.jpg"
                  sx={{
                    width: 60,
                    height: 60,
                  }}
                />
                <Typography
                  sx={{
                    fontWeight: "bold",
                  }}
                >
                  Lorem ipsum
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: "13px",
                    color: "gray",
                  }}
                >
                  Flutter
                </Typography>
                <Typography>Bug fixing</Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default TaskUpdatesContainer;
