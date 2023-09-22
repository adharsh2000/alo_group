import React from "react";
import {
  Box,
  styled,
  // Button,
  // ButtonGroup,
  // Checkbox,
  // Grid,
  //   TextField,
  // Typography,
  //   useTheme,
} from "@mui/material";
import LoginImage from "../../Images/LoginImage.svg";
// import FormField from "../../Components/Inputs/FormField";
// import { useTheme } from "@emotion/react";
import Form from "../../Components/Form/Form";

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  // "@media (max-width: 600px)": {
  //   width: "100%",
  //   height:'100vh',
  //   // margin: "10px",
  //   flexDirection: "column",
  //   alignItems:'center',
  //   justifyContent:'center',
  // },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100vh",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  // "@media (max-width: 1200px)": {
  //   width: "100%",
  //   // margin: "10px",
  //   flexDirection: "column",
  // },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    // margin: "10px",
    flexDirection: "column",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  // "@media (max-width: 600px)": {
  //   display:'none'
  // },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  // "@media (max-width: 1200px)": {
  //   width: "300%",
  //   margin: "10px",
  //   flexDirection: "column",
  // },
}));

const EmployeeLogin = () => {
  // const theme = useTheme();
  // const bgColor = theme?.palette?.primary?.main;
  return (
    <CardBox
    // display="flex"
    // flexDirection={{ xs: "column", md: "row" }}
    // bgcolor={bgColor}
    >
      <ImageBox
      // width={{ xs: "100%", md: "30%" }} display="flex" alignItems="center"
      >
        <img
          src={LoginImage}
          alt="logo/svg"
          style={{
            width: "100%",
          }}
        />
      </ImageBox>

      {/* <Box
        width={{ xs: "100%", md: "70%" }}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          bgcolor="white"
          sx={{
            width: "518px",
            height: "585px",
            borderRadius: "30px",
            p: 3,
          }}
        >
          <Box component="form" noValidate>
            <Grid container>
              <ButtonGroup
                disableElevation
                display="flex"
                flexDirection="column"
                alignItems="center"
                variant="contained"
                aria-label="Disabled elevation buttons"
                sx={{
                  mt: 4,
                  mx: `3px`,
                  width: "100%",
                }}
              >
                <Button
                  sx={{
                    width: "50%",
                    p: 2,
                    borderRadius: "20px",
                    backgroundColor: bgColor,
                    fontSize: "16px",
                    fontWeight: "600",
                    "&:focus": {
                      backgroundColor: "#D9D9D9",
                      color: bgColor,
                    },
                  }}
                >
                  User
                </Button>
                <Button
                  sx={{
                    width: "50%",
                    p: 2,
                    borderRadius: "20px",
                    backgroundColor: "#D9D9D9",
                    color: bgColor,
                    fontSize: "16px",
                    fontWeight: "600",
                    '&:hover': {
                      backgroundColor: "#D9D9D9", // Set it to the same color as the normal state
                    },
                  }}
                >
                  Admin
                </Button>
              </ButtonGroup>

              <Grid item xs={12}>
                <Typography
                  component="h6"
                  variant="body1"
                  sx={{
                    fontSize: 13,
                    mt: 5,
                    mb: 1,
                    fontWeight: "bold",
                  }}
                >
                  Email Address
                </Typography>
                <FormField type={"email"} placeHolder={"Your Email Address"} />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  component="h6"
                  variant="body1"
                  sx={{
                    fontSize: 13,
                    mt: 5,
                    mb: 1,
                    fontWeight: "bold",
                  }}
                  mb={0}
                >
                  Password
                </Typography>
                <FormField type={"password"} placeHolder={"*********"} />
              </Grid>
              <Grid item xs={12} display="flex" alignSelf="center">
                <Checkbox
                  // checked={checked}
                  // onChange={handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  sx={{
                    p:0,
                    mt:1,
                    '&.Mui-checked': {
                      color: 'black',
                      outline:'black',
                      backgroundColor:'white',
                    },
                  }}
                  
                />
                <Box
                  component="span"
                  variant="body1"
                  sx={{
                    fontSize: 14,
                    mt: 2,
                    mb: 1,
                    ml:2,
                    fontWeight: "bold",
                  }}
                >
                  Remember Me
                </Box>
              </Grid>
              <Grid item xs={12} display="flex" justifyContent="center">
              <Button
                  sx={{
                    width: "50%",
                    p: 2,
                    mt:2,
                    borderRadius: "20px",
                    backgroundColor: bgColor,
                    color:'#fff',
                    fontSize: "16px",
                    fontWeight: "600",
                    '&:hover': {
                      backgroundColor: bgColor, // Set it to the same color as the normal state
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box> */}
      <Form admin={false} />
    </CardBox>
  );
};

export default EmployeeLogin;
