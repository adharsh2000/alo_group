import React, { useRef } from "react";
import {
  Box,
  Button,
  Grid,
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

const AdminEmpList = () => {
  const theme = useTheme();
  const bgcolor = theme?.palette?.primary?.main;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const fileInputRef = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click(); // Trigger the hidden file input
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Do something with the selected file, like displaying its name
      alert(`Selected file: ${selectedFile.name}`);
    }
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
          <Box display="flex" bgcolor="white" borderRadius="10px">
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
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          width="50%"
          bgcolor="#fff"
          borderRadius="10px"
          p={2}
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
            xs={12}
            sm={12}
            md={12}
            p={2}
            display="flex"
            justifyContent="space-between"
            gap={2}
          >
            <Grid item md={4}>
              <Typography>Employee name</Typography>
              <TextField placeholder="full name" />
            </Grid>
            <Grid item md={4}>
              <Typography>Gender</Typography>
              <Select
                // value={selectedValue}
                // onChange={handleChange}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
                fullWidth
                placeholder="Choose"
              >
                <MenuItem value="Choose">
                  <em>Choose</em>
                </MenuItem>
                <MenuItem value={10}>Male</MenuItem>
                <MenuItem value={20}>Female</MenuItem>
                <MenuItem value={30}>Other</MenuItem>
              </Select>
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
              <Grid item md={4}>
                <Typography>Date of Birth</Typography>
                <TextField type="date" fullWidth />
              </Grid>
              <Grid item md={3}>
                <Typography>Age</Typography>
                <TextField placeholder="age" fullWidth />
              </Grid>
              <Grid item md={4}>
                <Typography>Experience</Typography>
                <Select
                  // value={selectedValue}
                  // onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  fullWidth
                  placeholder="Choose"
                >
                  <MenuItem value="Choose">
                    <em>1+ Experience</em>
                  </MenuItem>
                  <MenuItem value={10}>2+ Experience</MenuItem>
                  <MenuItem value={20}>3+ Experience</MenuItem>
                  <MenuItem value={30}>4+ Experience</MenuItem>
                </Select>
              </Grid>

              <Grid item md={7.5}>
                <Typography>Email Address</Typography>
                <TextField placeholder="full name" fullWidth />
              </Grid>

              <Grid item md={4}>
                <Typography>Designation</Typography>
                <TextField placeholder="full name" fullwidth />
              </Grid>

              <Grid item md={7.5}>
                <Stack>
                  <Typography>Phone Number</Typography>
                  <TextField placeholder="full name" fullWidth />
                </Stack>
                <Stack width="60%">
                  <Typography>Enter Password</Typography>
                  <TextField placeholder="full name"  />
                </Stack>
                <Stack width="60%">
                  <Typography>Confirm Password</Typography>
                  <TextField placeholder="full name" />
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
                    onChange={handleFileSelect}
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
