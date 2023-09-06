import React from "react";
import { Box, Divider, Typography, useTheme } from "@mui/material";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserHeader from "../../Components/UserComponents/UserHeader";
import LeftArrowIcon from "../../Icons/LeftArrowIcon.svg";
import UserMailCard from "../../Components/UserComponents/UserMailCard";
const EmpAllMail = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const paper = theme?.palette?.background?.paper;
  return (
    <Box width="100%" bgcolor={bgColor} display="flex">
      <Box display="flex">
        <UserNavbar />
      </Box>
      <Box ml={36}>
        <UserHeader />
        <Box
          width="97%"
          mt={1}
          ml={1}
          height={600}
          bgcolor={paper}
          borderRadius="20px"
        >
          <Box
            display="flex"
            alignItems="center"
            mt={2}
            width="100%"
            height={50}
            pl={1}
          >
            <img src={LeftArrowIcon} alt="back" width={25} />
            <Typography fontWeight="bold" fontSize="20px">
              All Mails
            </Typography>
          </Box>
          <Box width="95%" display="flex" gap={2} mx="auto" height={540}>
            <Box
              flex={1.5}
              sx={{
                maxHeight: 540,
                overflowY: "auto",
                boxSizing: "border-box",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <UserMailCard value={"Requested"} />
              <UserMailCard value={"Accepted"} />
              <UserMailCard value={"Declined"} />
              <UserMailCard value={"Requested"} />
              <UserMailCard value={"Accepted"} />
              <UserMailCard value={"Declined"} />
              <UserMailCard value={"Requested"} />
              <UserMailCard value={"Accepted"} />
              <UserMailCard value={"Declined"} />
            </Box>
            <Box flex={2.5} border="1px solid #000" borderRadius="20px">
              <Typography textAlign="end" p={2}>jul 06, 2023</Typography>
              <Divider />
              <UserMailCard height={500} value={"Accepted"} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EmpAllMail;
