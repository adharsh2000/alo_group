import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import FormClose from "../../Icons/FormClose.svg";
// import fileUpload from "../../Icons/AdminIcons/AdminUploadIcon.svg"
import UploadFileOutlinedIcon from "@mui/icons-material/UploadFileOutlined";

const AdminEditProject = ({ open, setOpen }) => {
  const [selectedValue, setSelectedValue] = useState("Choose");

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

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box display="flex" flexDirection="column" height="100%">
      {/* form Header */}
      <Box display="flex" alignItems="center" mt={1}>
        <Typography flex={5} variant="h6" textAlign="center">
          Edit project
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
        <Grid item md={4} xs={12}>
          <Typography>Client name</Typography>
          <TextField placeholder="ABCD Traders" fullWidth />
        </Grid>
        <Grid item md={4} xs={12}>
          <Typography>Project name</Typography>
          <TextField placeholder="ABCD" fullWidth />
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
          <Grid item md={4} xs={6}>
            <Typography>Starting date</Typography>
            <TextField type="date" fullWidth />
          </Grid>
          <Grid item md={3} xs={5}>
            <Typography>Period</Typography>
            <TextField placeholder="90 days" fullWidth />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography>Project Type</Typography>
            <TextField placeholder="E-Commerce" fullWidth />
          </Grid>

          <Grid item md={7.5} xs={5}>
            <Typography>Employees</Typography>
            <Select
              value={selectedValue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
              placeholder="Choose"
            >
              <MenuItem value="Choose">
                <em>Choose</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>

          <Grid item md={4}>
            <Typography>Application</Typography>
            <Select
              value={selectedValue}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              fullWidth
              placeholder="Choose"
            >
              <MenuItem value="Choose">
                <em>Web Application</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </Grid>

          <Grid
            item
            md={12}
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
              Save Changes
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AdminEditProject;
