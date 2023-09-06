import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserHeader from "../../Components/UserComponents/UserHeader";
import MailIcon from "../../Icons/MailIcon.svg";
import EmpMailForm from "../../Components/Form/EmpMailForm";
import { Link } from "react-router-dom";

const EmpMail = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const paper = theme?.palette?.background?.paper;
  const boxShadow = theme?.shape?.shadow;
  //   const borderRadius = theme?.shape?.borderRadius;
  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar />
      </Box>
      <Box ml={36}>
        <UserHeader />
        <Box
          display="flex"
          gap={2}
          justifyContent="space-evenly"
          px={2}
          pr={3}
          my={2}
          height={"85vh"}
        >
          <Box bgcolor={paper} flex={3} borderRadius="20px">
            <EmpMailForm />
          </Box>
          <Box
            bgcolor={paper}
            flex={1}
            display="flex"
            justifyContent="center"
            borderRadius="20px"
          >
            <Box
              border="1px solid #000"
              width="90%"
              height={50}
              display="flex"
              alignItems="center"
              justifyContent="center"
              gap={2}
              mt={2}
              boxShadow={boxShadow}
              borderRadius="10px"
              textAlign="center"
            >
              <Link
                to={"/allmails"}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "flex",
                }}
                
              >
                <img src={MailIcon} alt="mail" width={30}  />
                <Typography
                  fontWeight="bold"
                  sx={{ margin: "auto", whiteSpace: "nowrap" }}
                >
                  All Mails
                </Typography>
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmpMail;
