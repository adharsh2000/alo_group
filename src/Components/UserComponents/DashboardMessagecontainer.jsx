import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const DashboardMessagecontainer = () => {
  return (
    <Box
      ml={2}
      mt={1}
      width={300}
      height={350}
      bgcolor="#fff"
      borderRadius="20px"
    >
      <Box display="flex" justifyContent="space-around" mt={1}>
        <Typography>Recent Messages</Typography>
        <Link to="/messages" style={{ textDecoration: "none" }}>
          <Typography color="#1272A5">View All</Typography>
        </Link>
      </Box>
      <Box>
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {/*  */}
          <ListItem
            sx={{
              display: "flex",
              // alignItems:"center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" alignSelf="center">
              <ListItemAvatar>
                <Avatar>{/* <ImageIcon /> */}</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </Box>
            <Box display="flex" alignSelf="flex-start">
              <Typography
                sx={{
                  fontSize: "13px",
                }}
              >
                10.30 pm
              </Typography>
            </Box>
          </ListItem>
          <Divider />
          {/*  */}
          <ListItem
            sx={{
              display: "flex",
              // alignItems:"center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" alignSelf="center">
              <ListItemAvatar>
                <Avatar>{/* <ImageIcon /> */}</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </Box>
            <Box display="flex" alignSelf="flex-start">
              <Typography
                sx={{
                  fontSize: "13px",
                }}
              >
                10.30 pm
              </Typography>
            </Box>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              display: "flex",
              // alignItems:"center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" alignSelf="center">
              <ListItemAvatar>
                <Avatar>{/* <ImageIcon /> */}</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </Box>
            <Box display="flex" alignSelf="flex-start">
              <Typography
                sx={{
                  fontSize: "13px",
                }}
              >
                10.30 pm
              </Typography>
            </Box>
          </ListItem>
          <Divider />
          <ListItem
            sx={{
              display: "flex",
              // alignItems:"center",
              justifyContent: "space-between",
            }}
          >
            <Box display="flex" alignItems="center" alignSelf="center">
              <ListItemAvatar>
                <Avatar>{/* <ImageIcon /> */}</Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </Box>
            <Box display="flex" alignSelf="flex-start">
              <Typography
                sx={{
                  fontSize: "13px",
                }}
              >
                10.30 pm
              </Typography>
            </Box>
          </ListItem>
          <Divider />
        </List>
      </Box>
    </Box>
  );
};

export default DashboardMessagecontainer;
