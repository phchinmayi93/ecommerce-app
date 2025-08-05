import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/actions/productActions";
import { Box, styled, CircularProgress,Grid } from "@mui/material";


import ActionItems from "./ActionItems";
import ProductDetail from "./ProductDetail";

const Component = styled(Box)`
  background: #f2f2f2;
  margin-top: 55px;
`;

const Container = styled(Grid)(({theme}) => ({
  background: '#ffffff',
 display: 'flex',
 width:'100%',
 height:'100%',
  
  [theme.breakpoints.down('md')]: {
    margin:0

  }
}));
// const BannerImage = styled('img')({
//   width: '100%',
// // maxWidth:'628px',
//   objectFit: 'cover',
// });

const RightContainer = styled(Grid)`
  margin-top: 50px;
  padding-left: 25px;
  & > p {
    margin-top: 10px;
  }
  overflow-y: auto;
  overflow-x: auto;
  height: 100%;
  padding-right: 20px;
`;

const LoadingBox = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 55px);
`;

const DetailView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (!product || id !== product.id) {
      dispatch(getProductDetails(id));
    }
  }, [dispatch, id, product, loading]);

  // Handle the different states of data fetching
  if (loading) {
    return (
      <LoadingBox>
        <CircularProgress />
      </LoadingBox>
    );
  }

  if (!product?.id) {
    return (
      <LoadingBox>
        <p>Product not found.</p>
      </LoadingBox>
    );
  }

  // If the product data is available, render the main content
  return (
    <Component>
      <Container container>
        {/* Left Container: Sized automatically based on content */}
        <Grid size={{ lg: 4 , md: 4 , sm:8,xs: 12,}}>
          <ActionItems product={product} />
        </Grid>
        {/* Right Container: Stretches to fill the remaining space */}
        <RightContainer size={{lg:8,  md: 8 ,sm:8,xs: 12}}>
          <ProductDetail product={product} />
        </RightContainer>
      </Container>
    </Component>
  );
};

export default DetailView;