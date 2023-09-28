import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  Stack,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AdminEmpListContainer from "../../Components/AdminComponents/AdminEmpListContainer";
import { Link } from "react-router-dom";
import FormClose from "../../Icons/FormClose.svg";
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";
import { useMediaQuery } from "@mui/material";
import { EmpAddValidation } from "../../utils/validation";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { useDispatch, useSelector } from "react-redux";
import { clearError, setError } from "../../Store/Slices/errorSlice";
import { adminAddEmp, adminListEmp } from "../../Store/actions/adminEmp";
import { useEffect } from "react";

const AdminEmpList = () => {
  const theme = useTheme();
  const bgcolor = theme?.palette?.primary?.main;
  console.log("page");
  const isXs = useMediaQuery((theme) => theme.breakpoints.down("xs"));
  const { data } = useSelector((state) => state.employees)
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(adminListEmp());
  }, [dispatch,data]);

  const initialState = {
    fullname: "",
    gender: "choose",
    dateofbirth: "",
    age: "",
    experience: "choose",
    email: "",
    designation: "",
    phone: "",
    password: "",
    cfpassword: "",
    imgUrl: "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=996&t=st=1695822053~exp=1695822653~hmac=42c3f32b470936f4579dc6742bb2e0219f550b2a37c7c98e5d276cff4b2567b6",
  };

  const [empData, setEmpdata] = useState(initialState);
  const [showPassword, setShowPassword] = useState(false);
  const [showCfPassword, setShowCfPassword] = useState(false);
  const { errorMessage } = useSelector((state) => state.error);
  const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEmpdata({ ...empData, [name]: value });
  };

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      if (!allowedTypes.includes(selectedFile.type)) {
        console.log(selectedFile);
        e.target.value = ""; // Clear the file input
      }
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleClickShowCfPassword = () => {
    setShowCfPassword(!showCfPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownCfPassword = (event) => {
    event.preventDefault();
  };

  const reverseDate = (dateString) => {
  // Split the date string into its components (year, month, and day)
  const dateComponents = dateString.split("-");
  
  // Rearrange the components as "dd-mm-yyyy"
  const reversedDate = dateComponents.reverse().join("-");
  
  return reversedDate;
};

  const formData = {
    name : empData.fullname,
    email: empData.email,
    password : empData.password,
    gender : empData.gender,
    dob : reverseDate(empData.dateofbirth),
    imgUrl : empData.imgUrl,
    age : Number(empData.age),
    mobileNo : Number(empData.phone),
    experience : empData.experience,
    designation : empData.designation,
    role : "employee"
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const check = EmpAddValidation(empData);
    if (check.errLength > 0) {
      dispatch(setError(check.errMsg));
      return;
    }
    dispatch(clearError());
    dispatch(adminAddEmp(formData))
    setEmpdata(initialState);
  };

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={12}
        display="flex"
        alignItems="center"
        justifyContent="center"
        // width={1275}
        sx={{
          width: { xs: "100%", md: 1275 },
          // gap:{xs:1,md:0}
        }}
      >
        {/* Typography */}
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ order: { xs: 1, sm: 1 } }}
          display="flex"
          alignItems="center"
          //   justifyContent="center"
          pl={1}
        >
          <Typography fontWeight="bold" fontSize="20px">
            Employees
          </Typography>
        </Grid>

        {/* Buttons */}
        <Grid
          item
          xs={12}
          sm={4}
          sx={{ order: { xs: 3, sm: 2 } }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            display="flex"
            bgcolor="white"
            borderRadius="10px"
            sx={{
              my: { xs: 1, md: 0 },
            }}
          >
            <Button
              sx={{
                backgroundColor: bgcolor,
                color: "#fff",
                "&:hover": {
                  backgroundColor: bgcolor,
                },
                "&:focus": {
                  backgroundColor: bgcolor,
                },
                padding: "10px 50px",
              }}
            >
              <Link
                to="/admin/emplist"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                List
              </Link>
            </Button>
            <Button
              sx={{
                backgroundColor: "#fff",
                color: bgcolor,
                padding: "10px 50px",
              }}
            >
              <Link
                to="/admin/tasklist"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                Task
              </Link>
            </Button>
          </Box>
        </Grid>

        {/* Add Employee Button */}
        <Grid
          item
          xs={6}
          sm={4}
          sx={{ order: { xs: 2, sm: 3 } }}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            startIcon={<AddIcon />}
            sx={{
              backgroundColor: bgcolor,
              color: "#fff",
              "&:hover": {
                backgroundColor: bgcolor,
              },
              "&:focus": {
                backgroundColor: bgcolor,
              },
              padding: "10px 50px",
              whiteSpace: "nowrap",
            }}
            onClick={handleOpen}
          >
            Add Employee
          </Button>
        </Grid>
      </Grid>
      <AdminEmpListContainer />

      {/* add emp */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: { xs: "scroll", md: "" },
          // pt:{xs:15,md:0},
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          // width="50%"
          bgcolor="#fff"
          borderRadius="10px"
          p={2}
          sx={{
            width: { xs: "90%", md: "50%" },
            height: { xs: 1100, md: "auto" },
            mt: { xs: 40, md: 0 },
          }}
          component="form"
          noValidate
          onSubmit={handleSubmit}
        >
          {/* form Header */}
          <Box display="flex" alignItems="center" mt={1}>
            <Typography flex={5} variant="h6" textAlign="center">
              Add Employee
            </Typography>
            <Box flex={0.5} mr={1}>
              <Box
                component="button"
                sx={{
                  width: 20,
                  backgroundColor: "inherit",
                  border: "none",
                  cursor: "pointer",
                }}
                onClick={() => setOpen(!open)}
              >
                <img src={FormClose} width={30} alt="close" />
              </Box>
            </Box>
          </Box>

          {/* form content */}
          <Grid
            container
            // xs={12}
            // sm={12}
            // md={12}
            p={2}
            display="flex"
            justifyContent="space-between"
            // gap={2}
            sx={{
              gap: { xs: 0, md: 2 },
            }}
          >
            <Grid item md={4} xs={12}>
              <Typography>Employee name</Typography>
              <TextField
                placeholder="full name"
                size={isXs ? "small" : "medium"}
                fullWidth
                name="fullname"
                value={empData.fullname}
                onChange={handleChangeInput}
                // helperText={errorMessage && errorMessage.fullname}
                error={errorMessage && errorMessage.fullname}
              />
              {errorMessage && errorMessage.fullname ? (
                <p
                  style={{
                    fontSize: "12px",
                    color: "#f51",
                  }}
                >
                  {errorMessage.fullname}
                </p>
              ) : null}
            </Grid>
            <Grid item md={4} xs={12}>
              <Typography>Gender</Typography>
              <Select
                // value={selectedValue}
                // onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                fullWidth
                placeholder="Choose"
                name="gender"
                value={empData.gender}
                onChange={handleChangeInput}
                // helperText={errorMessage && errorMessage.gender}
                error={errorMessage && errorMessage.gender}
              >
                {/* <MenuItem value="Choose">
                  <em>Choose</em>
                </MenuItem> */}
                <MenuItem value="choose">Choose</MenuItem>
                <MenuItem value="male">Male</MenuItem>
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </Select>
              {errorMessage && errorMessage.gender ? (
                <p
                  style={{
                    fontSize: "12px",
                    color: "#f51",
                  }}
                >
                  {errorMessage.gender}
                </p>
              ) : null}
            </Grid>
            <Grid
              container
              item
              md={12}
              xs={12}
              gap={1}
              display="flex"
              justifyContent="space-between"
            >
              <Grid item md={4} xs={8}>
                <Typography>Date of Birth</Typography>
                <TextField
                  type="date"
                  fullWidth
                  name="dateofbirth"
                  value={empData.dateofbirth}
                  onChange={handleChangeInput}
                  error={errorMessage && errorMessage.date}
                />
                {errorMessage && errorMessage.date ? (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#f51",
                    }}
                  >
                    {errorMessage.date}
                  </p>
                ) : null}
              </Grid>
              <Grid item md={3} xs={3}>
                <Typography>Age</Typography>
                <TextField
                  placeholder="age"
                  fullWidth
                  type="number"
                  name="age"
                  value={empData.age}
                  onChange={handleChangeInput}
                  error={errorMessage && errorMessage.age}
                />
                {errorMessage && errorMessage.age ? (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#f51",
                    }}
                  >
                    {errorMessage.age}
                  </p>
                ) : null}
              </Grid>
              <Grid item md={4} xs={12}>
                <Typography>Experience</Typography>
                <Select
                  // value={selectedValue}
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  fullWidth
                  placeholder="Choose"
                  name="experience"
                  value={empData.experience}
                  onChange={handleChangeInput}
                  error={errorMessage && errorMessage.gender}
                >
                  <MenuItem value="choose">Choose</MenuItem>
                  <MenuItem value="1+ Experience">1+ Experience</MenuItem>
                  <MenuItem value="2+ Experience">2+ Experience</MenuItem>
                  <MenuItem value="3+ Experience">3+ Experience</MenuItem>
                </Select>
                {errorMessage && errorMessage.experience ? (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#f51",
                    }}
                  >
                    {errorMessage.experience}
                  </p>
                ) : null}
              </Grid>

              <Grid item md={7.5} xs={12}>
                <Typography>Email Address</Typography>
                <TextField
                  placeholder="email"
                  fullWidth
                  size={isXs ? "small" : "medium"}
                  name="email"
                  value={empData.email}
                  onChange={handleChangeInput}
                  error={errorMessage && errorMessage.email}
                />
                {errorMessage && errorMessage.email ? (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#f51",
                    }}
                  >
                    {errorMessage.email}
                  </p>
                ) : null}
              </Grid>

              <Grid item md={4}>
                <Typography>Designation</Typography>
                <TextField
                  placeholder="designation"
                  fullwidth
                  sx={{
                    width: { xs: "130%", md: "100%" },
                  }}
                  name="designation"
                  value={empData.designation}
                  onChange={handleChangeInput}
                  error={errorMessage && errorMessage.designation}
                />
                {errorMessage && errorMessage.designation ? (
                  <p
                    style={{
                      fontSize: "12px",
                      color: "#f51",
                    }}
                  >
                    {errorMessage.designation}
                  </p>
                ) : null}
              </Grid>

              <Grid item md={7.5} xs={12}>
                <Stack>
                  <Typography>Phone Number</Typography>
                  <TextField
                    placeholder="phone number"
                    type="number"
                    fullWidth
                    name="phone"
                    value={empData.phone}
                    onChange={handleChangeInput}
                    error={errorMessage && errorMessage.phone}
                  />
                  {errorMessage && errorMessage.phone ? (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#f51",
                      }}
                    >
                      {errorMessage.phone}
                    </p>
                  ) : null}
                </Stack>
                <Stack sx={{ width: { xs: "100%", md: "60%" } }}>
                  <Typography>Enter Password</Typography>
                  <TextField
                    placeholder="password"
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={empData.password}
                    onChange={handleChangeInput}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffOutlinedIcon />
                            ) : (
                              <VisibilityOutlinedIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={errorMessage && errorMessage.password}
                  />
                  {errorMessage && errorMessage.password ? (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#f51",
                      }}
                    >
                      {errorMessage.password}
                    </p>
                  ) : null}
                </Stack>
                <Stack sx={{ width: { xs: "100%", md: "60%" } }}>
                  <Typography>Confirm Password</Typography>
                  <TextField
                    placeholder="confirm password"
                    type={showCfPassword ? "text" : "password"}
                    name="cfpassword"
                    value={empData.cfpassword}
                    onChange={handleChangeInput}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowCfPassword}
                            onMouseDown={handleMouseDownCfPassword}
                            edge="end"
                          >
                            {showPassword ? (
                              <VisibilityOffOutlinedIcon />
                            ) : (
                              <VisibilityOutlinedIcon />
                            )}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    error={errorMessage && errorMessage.cfpassword}
                  />
                  {errorMessage && errorMessage.cfpassword ? (
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#f51",
                      }}
                    >
                      {errorMessage.cfpassword}
                    </p>
                  ) : null}
                </Stack>
              </Grid>

              <Grid
                item
                md={4}
                xs={12}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                mt={1}
              >
                <Typography>Upload Documentation</Typography>
                <Box border="1px dotted #000" p={5} mt>
                  {/* <img
                src={UploadFileOutlinedIcon}
                alt="Select File"
                onClick={handleImageClick}
                style={{ cursor: "pointer" }}
              /> */}
                  <UploadFileOutlinedIcon
                    onClick={handleImageClick}
                    sx={{
                      cursor: "pointer",
                    }}
                  />
                  <input
                    type="file"
                    accept=".jpg, .jpeg, .png, .gif"
                    onChange={handleFileChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />
                </Box>
                <Button
                  sx={{
                    m: 3,
                    backgroundColor: "#1272A5",
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "#1272A5",
                    },
                  }}
                  type="submit"
                >
                  Add Project
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </>
  );
};

export default AdminEmpList;
