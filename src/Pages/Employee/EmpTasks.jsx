import React, { useState } from "react";
// import UserHeader from "../../Components/UserComponents/UserHeader";
// import UserNavbar from "../../Components/UserComponents/UserNavbar";
import { useTheme } from "@emotion/react";
import { Box, Modal, Typography } from "@mui/material";
import UserTaskCard from "../../Components/UserComponents/UserTaskCard";
import addIcon from "../../Icons/AddIcon.svg";
import AddTask from "../../Components/Form/AddTask";

const EmpTasks = () => {
  const theme = useTheme();
  // const bgColor = theme?.palette?.background?.default;
  const paper = theme?.palette?.background?.paper;
  const main = theme?.palette?.primary?.main;

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    // <Box width="100%" bgcolor={bgColor} display="flex" >
    //   <Box display="flex">
    //     <UserNavbar />
    //   </Box>
    //   <Box ml={36}>
    //     <UserHeader />
    <>
      <Box display="flex">
        <Box
          width="100%"
          mt={1}
          // ml={1}
          // height={800}
          bgcolor={paper}
          borderRadius="20px"
          overflow="hidden"
          sx={{
            height: { xs: "auto", md: 800 },
          }}
        >
          <Typography fontWeight="bold" fontSize="large" pt={2} pl={4}>
            My tasks
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            p={2}
            width="100%"
            gap={1}
            sx={{
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box
              width={350}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              flex="1"
              height={700}
              gap={3}
              border="1px solid black"
              borderRadius="20px"
              sx={{
                maxHeight: 700,
                overflowY: "auto",
                boxSizing: "border-box",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <Typography variant="h6" sx={{ marginY: 2, fontWeight: 500 }}>
                Task To Do
              </Typography>
              <UserTaskCard priority="Low" newtask={true} width={350} />
              <UserTaskCard priority="High" newtask={true} width={350} />
              <UserTaskCard priority="Medium" newtask={true} width={350} />
              <UserTaskCard priority="Medium" newtask={true} width={350} />
            </Box>
            <Box
              width={350}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              flex="1"
              height={700}
              gap={3}
              border="1px solid black"
              borderRadius="20px"
              sx={{
                maxHeight: 700,
                overflowY: "auto",
                boxSizing: "border-box",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <Typography variant="h6" sx={{ marginY: 2, fontWeight: 500 }}>
                Task In Progress
              </Typography>
              <UserTaskCard priority="Low" width={350} />
              <UserTaskCard priority="High" width={350} />
              <UserTaskCard priority="Low" width={350} />
              <UserTaskCard priority="Medium" width={350} />
            </Box>
            <Box
              width={350}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="flex-start"
              flex="1"
              height={700}
              gap={3}
              border="1px solid black"
              borderRadius="20px"
              sx={{
                maxHeight: 700,
                overflowY: "auto",
                boxSizing: "border-box",
                "&::-webkit-scrollbar": {
                  display: "none",
                },
                scrollbarWidth: "none",
              }}
            >
              <Typography variant="h6" sx={{ marginY: 2, fontWeight: 500 }}>
                Completed
              </Typography>
              <UserTaskCard priority="Medium" completed={true} width={350} />
              <UserTaskCard priority="Low" completed={true} width={350} />
              <UserTaskCard priority="High" completed={true} width={350} />
              <UserTaskCard priority="Low" completed={true} width={350} />
            </Box>

            {/* <Box
                width={350}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flex="1"
                height={700}
                border="1px solid black"
                borderRadius="20px"
              >
                <UserTaskCard width={350} />
              </Box>
              <Box
                width={350}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                flex="1"
                height={700}
                border="1px solid black"
                borderRadius="20px"
              >
                <UserTaskCard width={350} />
              </Box> */}
          </Box>
        </Box>
      </Box>
      {/* </Box> */}
      <Box
        component="button"
        ariaLabel="SpeedDial basic example"
        sx={{
          position: "fixed",
          bottom: { xs: 20, md: 16 },
          right: { xs: 20, md: 16 },
          boxShadow: "none",
          transform: "none",
          borderRadius: "50%",
          backgroundColor: main,
          border: "none",
          width: 55,
          height: 55,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
        }}
        onClick={handleOpen}
      >
        <img src={addIcon} alt="add" />
      </Box>
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
          sx={{
            backgroundColor: "white",
            width: { xs: 350, md: 400 },
            height: 500,
            borderRadius: "20px",
          }}
        >
          <AddTask handleClose={handleClose} />
        </Box>
      </Modal>
    </>
    // </Box>
  );
};

export default EmpTasks;
