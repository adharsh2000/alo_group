import {
  Box,
  Button,
  Typography,
  // useTheme,
} from "@mui/material";
import React from "react";

const priorityColor = (priority) => {
  if (priority === "High") {
    return "#FF0000";
  } else if (priority === "Low") {
    return "#00FF1A";
  } else if (priority === "Medium") {
    return "#FFF500";
  }
};

const UserTaskCard = ({ newtask, priority, width, completed }) => {
  // const theme = useTheme();
  // const boxShadow = theme?.shape;
  return (
    <Box
      width={width}
      height="auto"
      sx={{
        boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.2)",
        border: `1px solid black`,
        borderRadius: "20px",
      }}
    >
      <Box>
        <Box p={2}>
          <Box display="flex" justifyContent="space-between">
            <Box
              p={1}
              bgcolor="#1272A5"
              width={200}
              sx={{
                opacity: "50%",
                borderRadius: "10px",
              }}
            >
              <Typography
                sx={{
                  color: "#fff",
                  opacity: "100%",
                  textAlign: "center",
                }}
              >
                Ux Research
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              {completed ? (
                ""
              ) : newtask ? (
                <Button
                  sx={{
                    backgroundColor: "#A5FF9D",
                    color: "#000",
                    width: "130px",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: "#A5FF9D",
                    },
                  }}
                >
                  Accept
                </Button>
              ) : (
                <select
                  name="cars"
                  id="cars"
                  style={{
                    width: 100,
                    height: 30,
                    borderRadius: "30px",
                    paddingLeft: 4,
                  }}
                >
                  <option value="volvo">In progress</option>
                  <option value="saab">Done</option>
                  <option value="opel">Pending</option>
                </select>
              )}
              {/* {newtask ? (
                <Button
                  sx={{
                    backgroundColor: "#A5FF9D",
                    color: "#000",
                    width: "130px",
                    height: "40px",
                    "&:hover": {
                      backgroundColor: "#A5FF9D",
                    },
                  }}
                >
                  Accept
                </Button>
              ) : (
                <select name="cars" id="cars"
                style={{
                    width:100,
                    height:30,
                    borderRadius:'30px',
                    paddingLeft:4
                }}
                >
                  <option value="volvo">In progress</option>
                  <option value="saab">Done</option>
                  <option value="opel">Pending</option>
                </select>
              )} */}
            </Box>
          </Box>
          <Typography mt={1}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et
          </Typography>
        </Box>
        <Box width="100%" height="1px" bgcolor="black" />
        <Box p={2} display="flex" justifyContent="space-between">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography color="gray">Assigned Date</Typography>
            <Typography>jul 05, 2023</Typography>
          </Box>
          {completed && (
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography color="gray">Completed Date</Typography>
              <Typography>jul 08, 2023</Typography>
            </Box>
          )}
          <Box display="flex" flexDirection="column" alignItems="center">
            <Typography color="gray">Priority</Typography>
            <Typography fontWeight="bold" color={priorityColor(priority)}>
              {priority}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserTaskCard;
