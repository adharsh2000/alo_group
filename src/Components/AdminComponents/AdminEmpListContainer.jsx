import React, { useEffect } from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import EmpListCard from "./EmpListCard";
import { adminListEmp } from "../../Store/actions/adminEmp";
import { useDispatch, useSelector } from "react-redux";

const AdminEmpListContainer = () => {
  const { data, fetchCount } = useSelector((state) => state.employees)

  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={12}
        // display="flex"
        // alignItems="center"
        // justifyContent="center"
      >
        <Box width="100%" bgcolor="#fff" borderRadius="10px">
          <Typography fontWeight="bold" fontSize="20px" my={1} ml={2}>
            {`Employes List (${fetchCount})`}
          </Typography>
          <Divider />
          <Box width="100%" p={2} overflowY="auto">
            {data?.map((item, index) => (
              <EmpListCard
                imgUrl={item?.imgUrl}
                name={item?.name}
                gender={item?.gender}
                dob={item?.dob}
                age={item?.age}
                designation={item?.designation}
                experience={item?.experience}
                email={item?.email}
              />
            ))}
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default AdminEmpListContainer;
