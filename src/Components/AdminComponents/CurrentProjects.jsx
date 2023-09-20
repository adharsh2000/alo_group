import React from "react";
import {
  //   Avatar,
  //   AvatarGroup,
  Box,
  Divider,
  Typography,
  useTheme,
} from "@mui/material";
import RightArrow from "../../Icons/AdminIcons/RightArrow.svg";
import DashboardCurrentProjectCard from "./DashboardCurrentProjectCard";
import { Link } from "react-router-dom";

const CurrentProjects = () => {
  const theme = useTheme();
  const textColor = theme?.palette?.primary?.main;
  //   const shadow = theme?.shape?.shadow;
  return (
    <Box
      bgcolor="#fff"
      width="100%"
      //   height={400}
      height="auto"
      minHeight={350}
      borderRadius="20px"
      sx={{
        mb: { xs: 2, sm: 0 },
      }}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        px={3}
        py={1}
      >
        <Typography fontWeight="bold">Current Projects</Typography>
        <Box display="flex">
          <Link to="/admin/projects" style={{ textDecoration: "none" }}>
            <Typography fontWeight="bold" color={textColor}>
              View All
            </Typography>
          </Link>
          <img src={RightArrow} alt="view/all" />
        </Box>
      </Box>
      <Divider />
      <DashboardCurrentProjectCard
        name={"Abcd"}
        type={"E-com"}
        date={"Jun,20,2023"}
        period={90}
        status={"Ux/Ui"}
      />
      <DashboardCurrentProjectCard
        name={"Abcd"}
        type={"E-com"}
        date={"Jun,20,2023"}
        period={90}
        status={"Ux/Ui"}
      />
      <DashboardCurrentProjectCard
        name={"Abcd"}
        type={"E-com"}
        date={"Jun,20,2023"}
        period={90}
        status={"Ux/Ui"}
      />
      <DashboardCurrentProjectCard
        name={"Abcd"}
        type={"E-com"}
        date={"Jun,20,2023"}
        period={90}
        status={"Ux/Ui"}
      />
    </Box>
  );
};

export default CurrentProjects;
