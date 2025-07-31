import { useEffect } from "react";

import { Fragment } from "react";
import Banner from "./Banner";
import Navbar from "./Navbar";
import { Box, styled } from "@mui/material";

import { getProducts } from "../../redux/actions/productActions";
import { useDispatch , useSelector} from "react-redux";

const Component = styled(Box)`
  background: #f2f2f2;
  padding: 20px 10px;

`;

const Home = () => {

 const {products} = useSelector(state => state.getProducts); 
 console.log(products);


  const dispatch = useDispatch();

  useEffect(() => {
     dispatch(getProducts());
  } , [dispatch])
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
