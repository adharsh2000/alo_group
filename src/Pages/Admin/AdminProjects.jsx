import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Modal, Typography } from "@mui/material";
import addIcon from "../../Icons/AddIcon.svg";
import AdminProjectCard from "../../Components/AdminComponents/AdminProjectCard";
import AdminAddProject from "../../Components/Form/AdminAddProject";
import { ListProjects } from "../../Store/actions/adminEmp";
import { useDispatch } from "react-redux";

const AdminProjects = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const handleClose = () => setOpen(!open);
  
  useEffect(() => {
    dispatch(ListProjects());
  }, [dispatch]);
  
  return (
    <>
      <Box
        p={1}
        // width={1275}
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: { xs: "100%", md: 1275 },
        }}
      >
        <Typography fontWeight="bold" fontSize="22px">
          Projects
        </Typography>

        <Button
          type="submit"
          sx={{
            backgroundColor: "#1272A5",
            color: "#fff",
            gap: 2,
            "&:hover": {
              backgroundColor: "#1272A5",
            },
          }}
          onClick={() => setOpen(!open)}
        >
          <img src={addIcon} width={20} alt="add" />
          New Project
        </Button>
      </Box>
      <Box height="auto" bgcolor="#fff" borderRadius="20px">
        <Typography p={2} fontWeight="bold">
          On Going Projects
        </Typography>
        <Divider />
        <Grid container xs={12} sm={12}>
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            mb={2}
            // p={2}
            sx={{
              p: { xs: 0, md: 2 },
            }}
          >
            <AdminProjectCard open={open} setOpen={setOpen} />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            display="flex"
            justifyContent="center"
            mb={2}
            // p={2}
            sx={{
              p: { xs: 0, md: 2 },
            }}
          >
            <AdminProjectCard open={open} setOpen={setOpen} />
          </Grid>
        </Grid>
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
          //   width="40%"
          bgcolor="#fff"
          borderRadius="10px"
          sx={{
            width: { xs: "90%", md: "60%", lg: "40%" },
          }}
        >
          <AdminAddProject open={open} setOpen={setOpen} />
        </Box>
      </Modal>
    </>
  );
};

export default AdminProjects;
