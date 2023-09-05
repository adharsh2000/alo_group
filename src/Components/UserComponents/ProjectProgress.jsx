import React from "react";
import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 20,
  borderRadius: 10,
  marginTop:8,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:"#ACCFE3"
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: "#1272A5",
    // position: "relative",
  },
}));

const ProjectProgress = ({ value, children }) => {
  return (
    <BorderLinearProgress variant="determinate" value={value}>
      <Typography
        sx={{
        //   position: "absolute",
          color: "black",
          right: "50px",
        }}
      >
        {children}
      </Typography>
    </BorderLinearProgress>
  );
};

export default ProjectProgress;
