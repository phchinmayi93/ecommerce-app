import { Box, styled, Typography } from '@mui/material';
import { navData } from '../constants/data';

const CommonWrapper = styled(Box)(({theme})=>({
   display: 'flex',
  justifyContent: 'space-between',

  // background:'#fff' ,
  margin: '40px 200px 0 200px',/* You can also reduce this if needed */
  [theme.breakpoints.down('lg')]:{
    margin:0
  }

}))
  
  


const Container = styled(Box)`
  padding: 12px 8px;
  align-items: center;

`;

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 500;
  margin-top: 8px;
  font-family: inherit;
  color: #212121;
`;

const Navbar = () => {
  return (
    <CommonWrapper>
      {navData.map((data, index) => (
        <Container key={index}>
          <img src={data.url} alt={data.text} style={{ width: 64, height: 64 }} />
          <Text>{data.text}</Text>
        </Container>
      ))}
    </CommonWrapper>
  );
};

export default Navbar;
