

import {AppBar, Toolbar, Typography, styled, Box} from '@mui/material';

//Components
import Search from './Search';
import CustomButtons from './CustomButtons';

const StyledHeader = styled(AppBar)`
    background-color: #2874f0;
    /* width: 40px;

     */
`

const Component = styled(Box)`
    margin-left: 12%;
    line-height: 0;
   /* color: white;   
    font-size: 32px;
    font-weight: 600;           
    font-family: inherit; */
`

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;     
    /* font-weight: 600;
    color: #fff;        
    margin-top: 3px;
    font-family: inherit;   
    margin-left: 10px; */
`
const PlusLogo = styled('img')`
    width: 10px;
    margin-left: 4px;
    height: 10px;
    `
    /* vertical-align: middle;
    margin-top: 3px;
 */
// const CustomButtonWrapper = styled(Box)`
//     margin: 0 5% 0 auto;    
// `
const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  return (

    <StyledHeader>
    
       <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px' }}>

            <Component>
            
                <img src={logoURL} alt="logo" style={{width: 75}} />
                <Box style={{display: 'flex', alignItems: 'center'}}>

                            <SubHeading>Explore&nbsp;
                                <Box component="span" style={{color: '#FFE500'}}> Plus</Box>
                            </SubHeading>
                            <PlusLogo src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="plus logo" style={{width: 10, marginLeft: 5}} />
            </Box>
    
 </Component>
 <Search />
           {/* <CustomButtonWrapper> */}
                {/* CustomButtons component can be added here */}
                <CustomButtons />
       {/* </CustomButtonWrapper> */}
        </Toolbar>
 
    </StyledHeader>
  );
}
export default Header;