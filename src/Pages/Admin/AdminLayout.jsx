import { Box, Grid, Stack, useTheme } from "@mui/material";
import React, { useState } from "react";
import AdminNavbar from "../../Components/AdminComponents/AdminNavbar";
import AdminHeader from "../../Components/AdminComponents/AdminHeader";

const AdminLayout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const bgColor = theme?.palette?.background?.default;
  return (
    <Grid container bgcolor={bgColor} spacing={1}>
      <Grid
        item
        sx={{
          display: { xs: "none", sm: "block" },
          borderRadius: "0px 30px 30px 0px",
          // backgroundColor: "red",
          position: { xs: "static", sm: "fixed" },
        }}
        md={2}
        sm={2}
      >
        <AdminNavbar open={open} setOpen={setOpen} />
      </Grid>

      <Grid
        container
        item
        xs={12}
        sm={10}
        sx={{ marginLeft: { xs: 0, sm: 30 } }}
      >
        <Box
        // sx={{ width: "100%" }}
        >
          <Stack rowGap={1} columnGap={1}>
            <Grid item xs={12}>
              <AdminHeader open={open} setOpen={setOpen} />
            </Grid>
            {children}
          </Stack>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AdminLayout;
