import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React from "react";
import FormClose from "../../Icons/FormClose.svg";
import addIcon from "../../Icons/AddIcon.svg";

const AddTask = ({ handleClose, admin }) => {
  return (
    <Box display="flex" flexDirection="column" height="100%">
      {/* form Header */}
      <Box display="flex" alignItems="center" mt={1}>
        <Typography flex={5} variant="h6" textAlign="center">
          Add Task
        </Typography>
        {!admin && (
          <Box flex={0.5} mr={1}>
            <Box
              component="button"
              sx={{
                width: 20,
                backgroundColor: "inherit",
                border: "none",
                cursor: "pointer",
              }}
              onClick={handleClose}
            >
              <img src={FormClose} width={30} alt="close" />
            </Box>
          </Box>
        )}
      </Box>
      {/* form content */}
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        // justifyContent="center"
        flexDirection="column"
        component="form"
      >
        {admin && (
          <Box width={200} mt={2}>
            <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
              Employee Name
            </Typography>
            <select
              name="name"
              id="name"
              style={{
                width: "100%",
                height: 30,
                borderRadius: "10px",
                paddingLeft: 4,
              }}
            >
              <option value="lorem ipsum">lorem ipsum</option>
              <option value="lorem ipsum">lorem ipsum</option>
              <option value="lorem ipsum">lorem ipsum</option>
            </select>
          </Box>
        )}
        <Box width={200} mt={2}>
          <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
            Assigning Date
          </Typography>
          <input
            type="date"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              outline: "none",
            }}
          />
        </Box>
        <Box width={200} mt={2}>
          <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
            Project
          </Typography>
          <select
            name="project"
            id="project"
            style={{
              width: "100%",
              height: 30,
              borderRadius: "10px",
              paddingLeft: 4,
            }}
          >
            <option value="lorem ipsum">lorem ipsum</option>
            <option value="lorem ipsum">lorem ipsum</option>
            <option value="lorem ipsum">lorem ipsum</option>
          </select>
        </Box>
        <Box width={200} mt={2}>
          <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
            Task Name
          </Typography>
          <select
            name="project"
            id="project"
            style={{
              width: "100%",
              height: 30,
              borderRadius: "10px",
              paddingLeft: 4,
            }}
          >
            <option value="lorem ipsum">lorem ipsum</option>
            <option value="lorem ipsum">lorem ipsum</option>
            <option value="lorem ipsum">lorem ipsum</option>
          </select>
        </Box>
        <Box width={200} mt={2}>
          <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
            Details
          </Typography>
          <input
            type="text"
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "10px",
              outline: "none",
            }}
          />
        </Box>
        <Box
          width={300}
          mt={2}
          sx={{
            ml: { xs: 5, md: "auto" },
          }}
        >
          <Typography fontSize="14px" fontWeight="bold" marginBottom="8px">
            Priority
          </Typography>
          <RadioGroup
            name="priority"
            row
            defaultValue="High"
            sx={{
              display: "flex",
              "& .MuiSvgIcon-root": {
                color: "#1272A5",
              },
            }}
          >
            <FormControlLabel
              control={<Radio size="small" />}
              label="High"
              value="High"
            />
            <FormControlLabel
              control={<Radio size="small" />}
              label="Medium"
              value="Medium"
            />
            <FormControlLabel
              control={<Radio size="small" />}
              label="Low"
              value="Low"
            />
          </RadioGroup>
        </Box>
        <Box
          width={200}
          mt={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            type="submit"
            sx={{
              backgroundColor: "#1272A5",
              color: "#fff",
              gap: 2,
              "&:hover": {
                backgroundColor: "#1272A5",
              },
              marginBottom: 2,
            }}
          >
            <img src={addIcon} width={20} alt="add" />
            Add Task
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddTask;
