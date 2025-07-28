

import { Fragment } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { Box, styled } from "@mui/material";

const Component = styled(Box)`
  background: #f2f2f2;
  padding: 20px 10px;

`;

const Home = () => {
  return (
    < >
      <Navbar />
      <Component>
      <Banner />
      </Component>
    </>
  );
};

export default Home;
