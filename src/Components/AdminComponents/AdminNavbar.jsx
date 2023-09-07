import React from 'react'
import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText,  useTheme } from '@mui/material'
import CompanyLogo from "../../Icons/CompanyIcon.svg";
import { adminHeaderData } from '../../data/adminNavbar';
import { Link } from 'react-router-dom';

const AdminNavbar = () => {
  const theme = useTheme();
  // const bgColor = theme?.palette?.background?.paper;
  const textColor = theme?.palette?.primary?.main;
  return (
    <Box sx={{
        width:'100%',
        height:'100vh',
        backgroundColor: '#fff',
        borderRadius:"0px 30px 30px 0px",
    }}>
        <Box
          width="100%"
          height="120px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <img src={CompanyLogo} alt="company/logo" />
          
        </Box>
        <Divider
          sx={{
            backgroundColor: "#000000",
          }}
        />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {adminHeaderData?.map((item) => (
            <ListItem key={item.id}>
              <Link
                to={item.url}
                style={{ textDecoration: "none", color: "#000" }}
              >
                <Box display="flex">
                  <ListItemAvatar>
                    <Avatar
                      sx={{
                        backgroundColor: "inherit",
                        "&:focus": {
                          backgroundColor: textColor,
                        },
                      }}
                    >
                      {item.image}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={item.name}
                    tabIndex={0}
                    sx={{
                      "&:focus": {
                        color: textColor,
                      },
                    }}
                  />
                </Box>
              </Link>
            </ListItem>
          ))}
        </List>
    </Box>
  )
}

export default AdminNavbar