import React from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import { useSelector } from "react-redux";

const BackDropLoader = () => {
  const load = useSelector((state) => state.load);
  console.log(load);
  return (
    <div>
      <Backdrop
        sx={{ color: "#1272A5", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={load?.loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
};

export default BackDropLoader;
