import React from "react";
import { Box, Divider, Grid, Typography } from "@mui/material";
import LeftArrowIcon from "../../Icons/LeftArrowIcon.svg";

const AdminEmpWorkSheetTable = () => {
  return (
    <>
      <Box height={800} bgcolor="#fff" borderRadius="20px">
        <Box display="flex" alignItems="center" px={2}>
          <img src={LeftArrowIcon} alt="back" />
          <Typography py={2} fontWeight="bold">
            Lorem Ipsum’s Worksheet
          </Typography>
          <input
            type="date"
            name=""
            id=""
            style={{
              outline: "none",
              border: "1px solid #c2c2c2",
              padding: 5,
              borderRadius: "10px",
              marginLeft:10,
            }}
          />
        </Box>
        <Divider />
        <Grid container xs={12} sm={12}>
          <Grid
            item
            xs={12}
            //   sm={6}
            display="flex"
            justifyContent="center"
            mb={2}
            p={2}
          >
            {/* <AdminProjectCard open={open} setOpen={setOpen}  /> */}
            <Box mt={2}>
              <table
                style={{ borderCollapse: "collapse" }}
                border="2px solid black"
                width={1000}
              >
                <tr
                  style={{
                    backgroundColor: "#1272A5",
                    color: "#fff",
                    padding: "10px",
                  }}
                >
                  <th>Date</th>
                  <th>Login</th>
                  <th>10am-12pm</th>
                  <th>12pm-1.15pm</th>
                  <th>2pm-4pm</th>
                  <th>4pm-7pm</th>
                  <th>Logout</th>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
                <tr>
                  <td>10/07/2023</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>lorem ipsum</td>
                  <td>7.30 pm</td>
                </tr>
              </table>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AdminEmpWorkSheetTable;
