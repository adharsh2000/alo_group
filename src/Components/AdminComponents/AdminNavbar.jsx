import React from 'react'
import { Avatar, Box, Divider, Drawer, List, ListItem, ListItemAvatar, ListItemText,  styled,  useTheme } from '@mui/material'
import CompanyLogo from "../../Icons/CompanyIcon.svg";
import { adminHeaderData } from '../../data/adminNavbar';
import { Link } from 'react-router-dom';

const Nav = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const AdminNavbar = ({open,setOpen}) => {
  const theme = useTheme();
  // const bgColor = theme?.palette?.background?.paper;
  const textColor = theme?.palette?.primary?.main;

  const adminNav = () => {
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


  return (
    <React.Fragment>
    {/* Visible in mobile view */}
    <Nav>
      <Drawer
        anchor="left"
        open={open}
        variant="temporary"
        onClose={() => setOpen(!open)}
      >
        {adminNav()}
      </Drawer>
    </Nav>

    {/* Always visible on larger screens */}
    <Nav>
      {adminNav()}
    </Nav>
  </React.Fragment>
  );
}

export default AdminNavbar