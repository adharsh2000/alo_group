import {
  Avatar,
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  styled,
} from "@mui/material";
import React from "react";
import CompanyLogo from "../../Icons/CompanyIcon.svg";
import Person from "../../Icons/Person.svg";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { userHeaderData } from "../../data/userNavbar";


const Nav = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const UserNavbar = ({open,setOpen}) => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.paper;
  const textColor = theme?.palette?.primary?.main;

  const navBar = () => {
    return (
      <Box
        width={283}
        height="100vh"
        bgcolor={bgColor}
        display="block"
        position="fixed"
        sx={{
          borderRadius: `0px 20px 20px 0px`,
         '@media (max-width: 600px)' :{
            position:'static',
            height:"50vh",
            width:300
          }
        }}
      >
        <Box
          width="100%"
          height="210px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-evenly"
        >
          <img src={CompanyLogo} alt="company/logo" />
          <Box display="flex">
            <img src={Person} alt="person" />
            <Box ml={3}>
              <Typography
                variant="body1"
                sx={{
                  fontWeight: "400",
                  mb: 0,
                }}
              >
                Lorem Ipsum
              </Typography>
              <Typography
                variant="overline"
                sx={{
                  fontWeight: "200",
                }}
              >
                UI/UX Designer
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            backgroundColor: "#000000",
          }}
        />
        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          {userHeaderData?.map((item) => (
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
                      {/* <img src={item.image} alt="icons" /> */}
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
    );
  };


  return (
    <React.Fragment>
    {/* Visible in mobile view */}
    <Nav>
      <Drawer
        anchor="left"
        open={open} // You can control the drawer's initial state here
        variant="temporary"
        onClose={() => setOpen(!open)}
      >
        {navBar()}
        {/* test */}
      </Drawer>
    </Nav>

    {/* Always visible on larger screens */}
    <Nav>
      {navBar()}
    </Nav>
  </React.Fragment>
  // <Nav>
  //   {navBar()}
  // </Nav>
  );
};

export default UserNavbar;
