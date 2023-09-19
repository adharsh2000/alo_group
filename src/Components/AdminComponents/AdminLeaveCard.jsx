import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import FormClose from "../../Icons/FormClose.svg";

const AdminLeaveCard = ({ newReq = true, accepted , declined, type  }) => {
  const theme = useTheme();
  const shadow = theme?.shape?.shadow;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box
        p={2}
        bgcolor="#fff"
        width="95%"
        borderRadius="15px"
        border="1px solid rgba(0, 0, 0, 0.50)"
        boxShadow={shadow}
      >
        <Box
          width="100%"
          bgcolor="#D9D9D9"
          borderRadius="15px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={1}
          onClick={handleOpen}
          sx={{
            cursor: "pointer",
          }}
        >
          <Avatar
            sx={{
              width: 80,
              height: 80,
            }}
          />
          <Typography fontWeight="bold">Admin</Typography>
          <Typography fontSize="medium">Ui/Ux Designer</Typography>
        </Box>
        <Box p={1}>
          <Typography mt={1} fontWeight="bold">
            Subject
          </Typography>
          <Typography>Leave request on Jul 11,2023</Typography>
          <Typography mt={1} fontWeight="bold">
            Message
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed .....
          </Typography>
        </Box>
        {type === "newReq" && (
          <Box display="flex" justifyContent="space-between">
            <Button
              sx={{
                backgroundColor: "#A5FF9D",
                color: "#000",
                width: "45%",
                "&:hover": {
                  backgroundColor: "#A5FF9D",
                },
              }}
            >
              Accept
            </Button>
            <Button
              sx={{
                backgroundColor: "#FF7070",
                color: "#000",
                width: "45%",
                "&:hover": {
                  backgroundColor: "#FF7070",
                },
              }}
            >
              Decline
            </Button>
          </Box>
        )}
        {type === "accepted" && (
          <Button
            sx={{
              backgroundColor: "#A5FF9D",
              color: "#000",
              width: "100%",
              // borderRadius:'10px',
              "&:hover": {
                backgroundColor: "#A5FF9D",
              },
            }}
          >
            Accepted
          </Button>
        )}
        {type === "declined" && (
          <Button
            sx={{
              backgroundColor: "#FF7070",
              color: "#000",
              width: "100%",
              // borderRadius:'10px',
              "&:hover": {
                backgroundColor: "#FF7070",
              },
            }}
          >
            Declined
          </Button>
        )}
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
          bgcolor="#fff"
          borderRadius="10px"
          sx={{
            width: { xs: "90%", md: "60%", lg: "40%" },
          }}
        >
          <Box m={2} display="flex" justifyContent="space-between">
            <Box display="flex" gap={3}>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                }}
              />
              <Box>
                <Typography fontWeight="bold">Lorem Ipsum</Typography>
                <Typography>Ui/Ux Designer</Typography>
              </Box>
            </Box>
            <Box display="flex" gap={3}>
              <Box>
                <Typography fontWeight="bold">Requested Date</Typography>
                <Typography>Jul 07,2023</Typography>
              </Box>
              <Box>
                <IconButton onClick={handleClose}>
                  <img src={FormClose} width={30} alt="close" />
                </IconButton>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Box m={2}>
            <Typography sx={{ mt: 2 }} fontWeight="bold">
              Subject
            </Typography>
            <Typography>Leave request on Jul 11,2023</Typography>
            <Typography sx={{ mt: 2 }} fontWeight="bold">
              Message
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut a liquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
            {type === "newReq" && (
              <Box display="flex" justifyContent="space-between" m={2}>
                <Button
                  sx={{
                    backgroundColor: "#A5FF9D",
                    color: "#000",
                    width: "45%",
                    "&:hover": {
                      backgroundColor: "#A5FF9D",
                    },
                  }}
                >
                  Accept
                </Button>
                <Button
                  sx={{
                    backgroundColor: "#FF7070",
                    color: "#000",
                    width: "45%",
                    "&:hover": {
                      backgroundColor: "#FF7070",
                    },
                  }}
                >
                  Decline
                </Button>
              </Box>
            )}
            {type === "accepted" && (
              <Box display="flex" justifyContent="center" m={2}>
                <Button
                  sx={{
                    backgroundColor: "#A5FF9D",
                    color: "#000",
                    width: "45%",
                    "&:hover": {
                      backgroundColor: "#A5FF9D",
                    },
                  }}
                >
                  Accepted
                </Button>
              </Box>
            )}
            {type === "declined" && (
              <Box display="flex" justifyContent="center" m={2}>
                <Button
                  sx={{
                    backgroundColor: "#FF7070",
                    color: "#000",
                    width: "45%",
                    "&:hover": {
                      backgroundColor: "#FF7070",
                    },
                  }}
                >
                  Declined
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AdminLeaveCard;
