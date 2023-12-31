import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import valid from "../../utils/validation";
import { clearError, setError } from "../../Store/Slices/errorSlice";
import { clearLoad, setLoad } from "../../Store/Slices/loadingSlice";
import { getCookie, removeCookie, setCookie } from "../../utils/cookieHelper";
import { postDataAPI } from "../../utils/apiHelper";
import axios from "axios";
import { adminLogin } from "../../Store/actions/adminAuth";
import { userLogin } from "../../Store/actions/userAuth";

const Form = ({ admin }) => {
  const theme = useTheme();
  const bgColor = theme?.palette?.primary?.main;

  const initialState = {
    email: "",
    password: "",
    role: admin ? "admin" : "employee",
  };

  const [formData, setFormData] = useState(initialState);
  const [rememberMe, setRememberMe] = useState(false);
  const { email, password } = formData;
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRememberMeChange = (e) => {
    const isChecked = e.target.checked;
    setRememberMe(isChecked);
  };

  useEffect(() => {
    const savedEmail = getCookie("email");
    const savedPassword = getCookie("password");
    const savedRememberMe = getCookie("rememberMe");

    if (savedRememberMe === "true" && savedEmail) {
      setFormData({
        ...formData,
        email: savedEmail,
        password: savedPassword,
      });
      setRememberMe(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const check = valid(formData);
    if (check.errLength > 0) {
      dispatch(setError(check.errMsg));
      return;
    }
    dispatch(clearError());

    if (rememberMe) {
      setCookie("email", email, { expires: 30 }); //days
      setCookie("password", password, { expires: 30 });
      setCookie("rememberMe", "true", { expires: 30 });
    } else {
      removeCookie("email");
      removeCookie("password");
      removeCookie("rememberMe");
    }

    if (initialState.role === "admin") {
      // api call
      dispatch(adminLogin(formData,navigate))
    } else {
      dispatch(userLogin(formData,navigate))
      // navigate("/dashboard");
    }
    setFormData(initialState);
    // dispatch(clearLoad());
  };

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
          <Box component="form" noValidate onSubmit={handleSubmit}>
            <Grid container>
              <Box display="flex" width="100%">
                <Link to="/login" style={{ textDecoration: "none", width: "100%" }}>
                  <Box
                    sx={{
                      borderRadius: `20px, 50px`,
                    }}
                  >
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
                      onClick={() => dispatch(clearError())}
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
                      onClick={() => dispatch(clearError())}
                    >
                      Admin
                    </Button>
                  </Box>
                </Link>
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
                <FormField
                  type={"email"}
                  placeHolder={"Your Email Address"}
                  value={email}
                  onChange={handleChangeInput}
                  error={error.errorMessage && error.errorMessage.email}
                />
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
                <FormField
                  type={"password"}
                  placeHolder={"*********"}
                  value={password}
                  onChange={handleChangeInput}
                  error={error.errorMessage && error.errorMessage.password}
                />
              </Grid>
              <Grid item xs={12} display="flex" alignSelf="center">
                <Checkbox
                  checked={rememberMe}
                  onChange={handleRememberMeChange}
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
                  type="submit"
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
