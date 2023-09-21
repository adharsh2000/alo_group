import React, { useState } from "react";
import { Box, Divider, Modal, Typography, useTheme } from "@mui/material";
import UserNavbar from "../../Components/UserComponents/UserNavbar";
import UserHeader from "../../Components/UserComponents/UserHeader";
import LeftArrowIcon from "../../Icons/LeftArrowIcon.svg";
import UserMailCard from "../../Components/UserComponents/UserMailCard";
import { Link } from "react-router-dom";

const EmpAllMail = () => {
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  const paper = theme?.palette?.background?.paper;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // <Box width="100%" bgcolor={bgColor} display="flex">
    //   <Box display="flex">
    //     <UserNavbar />
    //   </Box>
    //   <Box ml={36}>
    //     <UserHeader />
    <>
      <Box
        width="97%"
        mt={1}
        ml={1}
        height={600}
        bgcolor={paper}
        borderRadius="20px"
        sx={{
          height: { xs: 800, md: 600 },
        }}
      >
        <Box
          display="flex"
          alignItems="center"
          mt={2}
          width="100%"
          height={50}
          pl={1}
        >
          <Link
            to="/mailing"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              color: "inherit",
            }}
          >
            <img src={LeftArrowIcon} alt="back" width={25} />
            <Typography fontWeight="bold" fontSize="20px">
              All Mails
            </Typography>
          </Link>
        </Box>
        <Box
          width="95%"
          display="flex"
          gap={2}
          mx="auto"
          //  height={540}
          sx={{
            flexDirection: { xs: "column", md: "row" },
            height: { xs: 700, md: 540 },
          }}
        >
          <Box
            flex={1.5}
            sx={{
              maxHeight: { xs: 700, md: 540 },
              overflowY: "auto",
              boxSizing: "border-box",
              "&::-webkit-scrollbar": {
                display: "none",
              },
              scrollbarWidth: "none",
            }}
          >
            <UserMailCard value={"Requested"} handleOpen={handleOpen} />
            <UserMailCard value={"Accepted"} handleOpen={handleOpen} />
            <UserMailCard value={"Declined"} handleOpen={handleOpen} />
            <UserMailCard value={"Requested"} handleOpen={handleOpen} />
            <UserMailCard value={"Accepted"} handleOpen={handleOpen} />
            <UserMailCard value={"Declined"} handleOpen={handleOpen} />
            <UserMailCard value={"Requested"} handleOpen={handleOpen} />
            <UserMailCard value={"Accepted"} handleOpen={handleOpen} />
            <UserMailCard value={"Declined"} handleOpen={handleOpen} />
          </Box>
          <Box
            flex={2.5}
            border="1px solid #000"
            borderRadius="20px"
            sx={{
              display: { xs: "none", md: "block" },
            }}
          >
            <Typography textAlign="end" p={2}>
              jul 06, 2023
            </Typography>
            <Divider />
            <UserMailCard height={500} value={"Accepted"} />
          </Box>
        </Box>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          display: { xs: "flex", md: "none" },
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Box
          bgcolor="#fff"
          width="90%"
          height={550}
          overflow="hidden"
          borderRadius="20px"
        >
          <Box
            flex={2.5}
            // border="1px solid #000"
            borderRadius="20px"
            // sx={{
            //   display: { xs: "none", md: "block" },
            // }}
          >
            <Typography textAlign="end" p={2}>
              jul 06, 2023
            </Typography>
            <Divider />
            <UserMailCard height={500} value={"Accepted"} />
          </Box>
        </Box>
      </Modal>
    </>
    //   </Box>
    // </Box>
  );
};

export default EmpAllMail;
