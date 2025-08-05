import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, styled } from "@mui/material";

import Banner from "./Banner";
import Navbar from "./Navbar";
import Slide from "./Slide";




import { getProducts } from "../../redux/actions/productActions";
import MidSlide from "./MidSlide";
import MidSection from "./MidSection";
import Grid from "./GridTemplate";

const Component = styled(Box)`
  background: #f2f2f2;
  padding: 20px 10px;
`;

const Home = () => {
  const dispatch = useDispatch();

  const { products} = useSelector(
    (state) => state.getProducts
  );

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <Component>
        <Banner />
        {/* Optionally show loading or error UI
        {loading ? (
          <p>Loading products...</p>
        ) : error ? (
          <p>Error loading products: {error}</p>
        ) : ( */}
          <MidSlide products={products} title="Deal Of the Day" timer={true}/>
           <MidSection />
      
          <Slide products={products} title="Best deal on Smartphones" timer={false}/>
          <Slide products={products} title="Home" timer={false} />
          <Slide products={products} title="Featured Brands" timer={false} />
          <Slide products={products} title="Rakshabandhan Specials" timer={false}/>
          <Slide products={products} title="Make your home Stylish" timer={false}/>
          <Slide products={products} title="Season's Top Picks" timer={false}/>
          <Slide products={products} title="Trending Gadgets" timer={false}/>
          <Slide products={products} title="Home Decor & Furnishing" timer={false}/>
        {/* )} */}
      </Component>
    </>
  );
};

export default Home;
