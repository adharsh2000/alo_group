import React from "react";
import {
  Box,
  Button,
  // ButtonGroup,
  Checkbox,
  Grid,
  //   TextField,
  Typography,
  //   useTheme,
} from "@mui/material";
// import LoginImage from "../../Images/LoginImage.svg";
import FormField from "../../Components/Inputs/FormField";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";

const Form = ({ admin }) => {
  const theme = useTheme();
  const bgColor = theme?.palette?.primary?.main;
  console.log(admin);
  return (
    <>
      <Box
        width={{ xs: "97%", md: "70%" }}
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
          {/* <Box component="form">
            <ButtonGroup
              disableElevation
              display="flex"
              flexDirection="column"
              alignItems="center"
              variant="contained"
              aria-label="Disabled elevation buttons"
              sx={{
                mt:4,
              }}
            >
              <Button sx={{ width: "200px",p:2 }}>One</Button>
              <Button sx={{ width: "200px",p:2 }}>Two</Button>
            </ButtonGroup>

            <Typography component='h6' variant="body1" sx={{
                fontSize:13
            }}>Email Address</Typography>

            <FormField type={"email"} placeHolder={"Your Email Address"}/>
            <FormField type={"password"} placeHolder={"*********"}/>
          </Box> */}
          <Box component="form" noValidate>
            <Grid container>
              {/* <ButtonGroup
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
              > */}
              <Box display="flex" width="100%">
                <Link to="/" style={{ textDecoration: "none", width: "100%" }}>
                  <Box sx={{
                    borderRadius: `20px, 50px`,
                  }}>
                    <Button
                      sx={{
                        width: "100%",
                        p: 2,
                        borderRadius: "20px 0 0 20px",
                        backgroundColor: admin ? "#D9D9D9" : bgColor,
                        color: admin ? bgColor : "#fff",
                        fontSize: "16px",
                        fontWeight: "600",
                        "&:hover": {
                          backgroundColor: admin ? "#D9D9D9" : bgColor,
                        },
                      }}
                    >
                      User
                    </Button>
                  </Box>
                </Link>
                <Link
                  to="/admin"
                  style={{ textDecoration: "none", width: "100%" }}
                >
                  <Box>
                    <Button
                      sx={{
                        width: "100%",
                        p: 2,
                        borderRadius: "0 20px 20px 0",
                        backgroundColor: admin ? bgColor : "#D9D9D9",
                        color: admin ? "#fff" : bgColor,
                        fontSize: "16px",
                        fontWeight: "600",
                        "&:hover": {
                          backgroundColor: admin ? bgColor : "#D9D9D9",
                        },
                      }}
                    >
                      Admin
                    </Button>
                  </Box>
                </Link>
              {/* </ButtonGroup> */}
              </Box>

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
                    p: 0,
                    mt: 1,
                    color: bgColor,
                    "&.Mui-checked": {
                      color: bgColor,
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
                    ml: 2,
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
                    mt: 6,
                    borderRadius: "20px",
                    backgroundColor: bgColor,
                    color: "#fff",
                    fontSize: "16px",
                    fontWeight: "600",
                    "&:hover": {
                      backgroundColor: bgColor,
                    },
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Form;
