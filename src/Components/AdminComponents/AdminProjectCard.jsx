import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import DownloadIcon from "../../Icons/DownloadIcon.svg";
import ProjectProgress from "../Common/ProjectProgress";
import AdminEditProject from "../Form/AdminEditProject";

const AdminProjectCard = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const Blue = theme?.palette?.primary?.main;
  const shadow = theme?.shape?.shadow;

  const handleClose = () => setOpen(!open);
  return (
    <>
      <Box bgcolor="#EEF7FD" width="90%" borderRadius="10px" boxShadow={shadow}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          m={2}
        >
          <Typography
            bgcolor="#FFDEDE"
            fontWeight="bold"
            py={2}
            px={8}
            borderRadius="10px"
          >
            ABCD
          </Typography>
          <Box
            component="button"
            bgcolor={Blue}
            sx={{
              outline: "none",
              border: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              p: 1,
              width: 250,
              borderRadius: "10px",
              cursor: "pointer",
            }}
          >
            <img src={DownloadIcon} alt="download" />
            <Typography color="white" whiteSpace="nowrap">
              Download Documentation
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" mx={2} height={60}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography>Project Type</Typography>
            <Typography fontWeight="bold">E-Commerce</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography>Client Name</Typography>
            <Typography fontWeight="bold">ABCD Traders</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography>Starting Date</Typography>
            <Typography fontWeight="bold">jun 20,2023</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Typography>Period</Typography>
            <Typography fontWeight="bold">90 Days</Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="space-between" m={2}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography>Current Status</Typography>
            <Typography fontWeight="bold">Ui/Ux</Typography>
          </Box>
          <ProjectProgress value={70} width={"70%"} />
        </Box>
        <Divider sx={{ borderTop: "2px solid #909090" }} />
        <Box>
          <Box
            display="flex"
            flexDirection="row-reverse"
            alignItems="center"
            mt={1}
          >
            <Button
              sx={{
                p: 0,
                mr: 1,
                backgroundColor: "#1272A5",
                color: "#fff",
                // gap:2,
                "&:hover": {
                  backgroundColor: "#1272A5",
                },
                // marginBottom:2
              }}
              onClick={() => setOpen(!open)}
            >
              <Typography fontSize="12px">Edit</Typography>
            </Button>
            <Typography mx="auto">Employees</Typography>
          </Box>
          <Box display="flex" justifyContent="space-between" mx={2} my={2}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar />
              <Typography fontSize="15px">lorem ipsim</Typography>
              <Typography fontWeight="bold">Ui/Ux</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar />
              <Typography fontSize="15px">lorem ipsim</Typography>
              <Typography fontWeight="bold">Ui/Ux</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar />
              <Typography fontSize="15px">lorem ipsim</Typography>
              <Typography fontWeight="bold">Ui/Ux</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar />
              <Typography fontSize="15px">lorem ipsim</Typography>
              <Typography fontWeight="bold">Ui/Ux</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar />
              <Typography fontSize="15px">lorem ipsim</Typography>
              <Typography fontWeight="bold">Ui/Ux</Typography>
            </Box>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <Avatar />
              <Typography fontSize="15px">lorem ipsim</Typography>
              <Typography fontWeight="bold">Ui/Ux</Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* edit Modal */}
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
        //   width="40%"
          bgcolor="#fff"
          borderRadius="10px"
          sx={{
            width: { xs: "90%", md: "60%",lg:"40%" },
          }}
        >
          <AdminEditProject open={open} setOpen={setOpen} edit={false}/>
        </Box>
      </Modal>
    </>
  );
};

export default AdminProjectCard;
