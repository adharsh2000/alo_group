import {
  Box,
  Button,
  //   FormControl,
  Grid,
  Modal,
  //   InputLabel,
  //   MenuItem,
  //   Select,
  //   Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import AddTask from "../../Components/Form/AddTask";
import { Link } from "react-router-dom";
import FilterIcon from "../../Icons/AdminIcons/FilterIcon.svg";
import EmpListCard from "../../Components/AdminComponents/EmpListCard";

const AdminTaskList = () => {
  const theme = useTheme();
  const bgcolor = theme?.palette?.primary?.main;

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    // <>
    //   <Grid
    //     container
    //     item
    //     xs={12}
    //     sm={12}
    //     display="flex"
    //     alignItems="center"
    //     justifyContent="center"
    //     p={1}
    //   >
    //     <Grid
    //       item
    //       xs={12}
    //       sm={9}
    //       display="flex"
    //       flexDirection="column"
    //       alignItems="flex-start"
    //     >
    //       <Box sx={{ width: "97%" }}>
    //         <Stack rowGap={1} columnGap={1}>
    //           <Box
    //             display="flex"
    //             px={2}
    //             // alignItems="center"
    //             justifyContent="space-between"
    //           >
    //             <Typography fontWeight="bold" fontSize="20px">
    //               Employees
    //             </Typography>

    //             <Box display="flex" bgcolor="white" borderRadius="10px">
    //               <Button
    //                 sx={{
    //                   backgroundColor: "#123456",
    //                   color: bgcolor,
    //                   padding: "10px 50px",
    //                 }}
    //               >
    //                 <Link
    //                   to="/admin/emplist"
    //                   style={{ textDecoration: "none", color: "inherit" }}
    //                 >
    //                   List
    //                 </Link>
    //               </Button>
    //               <Button
    //                 sx={{
    //                   backgroundColor: bgcolor,
    //                   color: "#fff",
    //                   "&:hover": {
    //                     backgroundColor: bgcolor,
    //                   },
    //                   "&:focus": {
    //                     backgroundColor: bgcolor,
    //                   },
    //                   padding: "10px 50px",
    //                 }}
    //               >
    //                 <Link
    //                   to="/admin/tasklist"
    //                   style={{ textDecoration: "none", color: "inherit" }}
    //                 >
    //                   Task
    //                 </Link>
    //               </Button>
    //             </Box>
    //           </Box>
    //         </Stack>
    //       </Box>
    //       <Box
    //         width="97%"
    //         bgcolor="#b8b8b8"
    //         display="flex"
    //         p={1}
    //         alignItems="center"
    //         justifyContent="space-between"
    //       >
    //         <Typography fontWeight="bold">All Tasks</Typography>
    //         <Box display="flex" alignItems="center">
    //           <Box display="flex" bgcolor="#fff" borderRadius="10px">
    //             <img src={FilterIcon} alt="filter" width={20} />
    //             <select name="" id="">
    //                 <option value="">abcd</option>
    //                 <option value="">abcd</option>
    //                 <option value="">abcd</option>
    //             </select>
    //           </Box>
    //           <Box bgcolor="#fff" borderRadius="10px" p={2}>
    //             <input
    //               type="date"
    //               name=""
    //               id=""
    //               style={{
    //                 outline: "none",
    //                 height: 30,
    //               }}
    //             />
    //           </Box>
    //         </Box>
    //       </Box>
    //     </Grid>
    //     <Grid item xs={12} sm={3} bgcolor="#fff" borderRadius="10px">
    //       <AddTask />
    //     </Grid>
    //   </Grid>
    // </>

    <>
      <Grid
        container
        item
        xs={12}
        sm={12}
        display="flex"
        // alignItems="center"
        // justifyContent="center"
        // p={1}
        // width={1275}
        sx={{
          width: { xs: "100%", md: 1275 },
          flexDirection: { xs: "column", md: "row" },
        }}
        // mx="auto"
      >
        <Box
          width="70%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            width: { xs: "100%", md: "70%" },
          }}
          mx="auto"
        >
          <Box
            display="flex"
            // px={2}
            alignItems="center"
            justifyContent="space-between"
            width="100%"
            // bgcolor="red"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              px: { xs: 0, md: 2 },
            }}
            // mx="auto"
          >
            <Box
              sx={{
                width: { xs: "100%", md: "10%" },
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                // bgcolor:"red",
                mb: { xs: 2, md: 0 },
              }}
            >
              <Typography fontWeight="bold" fontSize="20px">
                Tasks
              </Typography>

              <Button
                sx={{
                  backgroundColor: bgcolor,
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: bgcolor,
                  },
                  "&:focus": {
                    backgroundColor: bgcolor,
                  },
                  padding: "10px 50px",
                  display: { xs: "block", md: "none" },
                }}
                onClick={handleOpen}
              >
                Add Task
              </Button>
            </Box>

            <Box display="flex" bgcolor="white" borderRadius="10px">
              <Button
                sx={{
                  backgroundColor: "#fff",
                  color: bgcolor,
                  padding: "10px 50px",
                }}
              >
                <Link
                  to="/admin/emplist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  List
                </Link>
              </Button>
              <Button
                sx={{
                  backgroundColor: bgcolor,
                  color: "#fff",
                  "&:hover": {
                    backgroundColor: bgcolor,
                  },
                  "&:focus": {
                    backgroundColor: bgcolor,
                  },
                  padding: "10px 50px",
                }}
              >
                <Link
                  to="/admin/tasklist"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  Task
                </Link>
              </Button>
            </Box>
          </Box>
          <Box
            width="97%"
            bgcolor="#c0c0c08a"
            display="flex"
            p={1}
            alignItems="center"
            justifyContent="space-between"
            mt={1}
            borderRadius="10px"
            sx={{
              flexDirection: { xs: "column", md: "row" },
              width: { xs: "100%", md: "97%" },
            }}
          >
            <Typography fontWeight="bold" fontSize="20px" ml={1}>
              All Tasks
            </Typography>
            <Box
              display="flex"
              alignItems="center"
              // sx={{
              //   flexDirection:{xs:"column",md:"row"}
              // }}
            >
              <Box
                display="flex"
                alignItems="center"
                bgcolor="#fff"
                borderRadius="5px"
                py
                px={2}
              >
                <img src={FilterIcon} alt="filter" width={20} />
                <select
                  name=""
                  id=""
                  style={{
                    border: "none",
                    width: 100,
                    outline: "none",
                  }}
                >
                  <option value="">All</option>
                  <option value="">pending</option>
                  <option value="">to do</option>
                  <option value="">Completed</option>
                </select>
              </Box>
              <Box
                bgcolor="#fff"
                borderRadius="5px"
                //    p={2}
                py
                px={2}
                ml={9}
              >
                <input
                  type="date"
                  name=""
                  id=""
                  style={{
                    border: "none",
                    // height: 30,
                    outline: "none",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            width="97%"
            bgcolor="#fff"
            borderRadius="20px"
            mt={1}
            p={1}
            minHeight={500}
            // mx="auto"
            sx={{
              ml: { xs: 1, md: 0 },
            }}
          >
            <EmpListCard task={true} />
            <EmpListCard task={true} />
            <EmpListCard task={true} />
            <EmpListCard task={true} />
            <EmpListCard task={true} />
            <EmpListCard task={true} />
          </Box>
        </Box>
        <Box
          width="30%"
          bgcolor="#fff"
          borderRadius="10px"
          sx={{
            display: { xs: "none", md: "block" },
          }}
        >
          <AddTask admin={true} />
        </Box>
      </Grid>
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
            bgcolor: "#fff",
            borderRadius: "10px",
          }}
        >
          <AddTask admin={true} />
        </Box>
      </Modal>
    </>
  );
};

export default AdminTaskList;
