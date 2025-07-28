import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { bannerData } from "../constants/data";
import { styled, Box } from "@mui/material";

// Styled image with fixed height
const Image = styled('img')`
  width: 100%;
  height: 280px;
  object-fit: cover;
  margin: 0;
  padding: 0;
`;

// Optional: Wrapper to ensure no spacing
const CarouselWrapper = styled(Box)`
  margin: 0;
  padding: 0;
`;

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Banner = () => {
  return (
    <CarouselWrapper>
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        keyBoardControl={true}
        showDots={false}
        slidesToSlide={1}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
      >
        {bannerData.map((data, index) => (
          <Image key={index} src={data.url} alt="banner" />
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default Banner;
