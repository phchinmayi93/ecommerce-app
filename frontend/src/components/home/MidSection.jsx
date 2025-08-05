import Grid from '@mui/material/Grid';
import { imageURL } from '../constants/data';
import { styled } from '@mui/material';

const Wrapper = styled(Grid)`
  margin-top: 10px;
  /* justify-content: space-between; */
`;

const BannerImage = styled('img')({
  width: '100%',
maxWidth:'628px',
  objectFit: 'cover',
});

const CovidImage = styled('img')({
  width: '100%',
  marginTop: '10px',
});

const MidSection = () => {
  const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

  return (
    <>
      <Wrapper container>
        {imageURL.map((image, index) => (
          <Grid item lg={4} md={4} sm={12} xs={12} key={index}>
            <BannerImage src={image} alt={`banner-${index}`} />
          </Grid>
        ))}
      </Wrapper>
      <CovidImage src={url} alt="covid-banner" />
    </>
  );
};

export default MidSection;
