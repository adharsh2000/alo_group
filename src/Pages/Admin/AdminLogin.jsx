// import { useTheme } from '@emotion/react';
import { Box, styled } from '@mui/material';
import React from 'react'
import Form from '../../Components/Form/Form';
import LoginImage from "../../Images/LoginImage.svg";

const CardBox = styled(Box)(({ theme }) => ({
  display: "flex",
  backgroundColor: theme.palette.primary.main,
  height:'100vh',
  "@media (max-width: 600px)": {
    width: "100%",
    height:'100vh',
    // margin: "10px",
    flexDirection: "column",
    alignItems:'center',
    justifyContent:'center',
  },
  "@media (max-width: 1200px)": {
    width: "100%",
    // margin: "10px",
    flexDirection: "column",
  },
}));

const ImageBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems:"center",
  "@media (max-width: 600px)": {
    display:'none'
  },
  // "@media (max-width: 1200px)": {
  //   width: "300%",
  //   margin: "10px",
  //   flexDirection: "column",
  // },
}));

const AdminLogin = () => {
    // const theme = useTheme();
    // const bgColor = theme?.palette?.primary?.main;
    return (
      <CardBox
        // display="flex"
        // flexDirection={{ xs: "column", md: "row" }}
        // bgcolor={bgColor}
      >
        <ImageBox 
        // width={{ xs: "100%", md: "30%" }} display="flex" alignItems="center"
        >
          <img
            src={LoginImage}
            alt="logo/svg"
            style={{
              width: "100%",
            }}
          />
        </ImageBox>
        <Form admin={true}/>
      </CardBox>
    );
}

export default AdminLogin