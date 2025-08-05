import { useState } from 'react';
import { AppBar, Toolbar, Typography, styled, Box, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Menu } from '@mui/icons-material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';

// Styled components
const StyledHeader = styled(AppBar)`
  background-color: #2874f0;
`;

const Component = styled(Link)`
  margin-left: 12%;
  line-height: 0;
  text-decoration: none;
  color: inherit;
`;

const SubHeading = styled(Typography)`
  font-size: 10px;
  font-style: italic;
`;

const PlusLogo = styled('img')`
  width: 10px;
  margin-left: 4px;
  height: 10px;
`;

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  margin: '0 5% 0 auto',
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const MenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

// Main component
const Header = () => {
  const [open, setOpen] = useState(false);
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const list = () => {
    return (
     
        <Box 
        sx={{ width: 250 }} 
        role="presentation" 
        onClick={handleClose} 
        onKeyDown={handleClose}
        
      
      >
        <List>
          <ListItem button>
            <CustomButtons />
          </ListItem>
        </List>
      </Box>
      
    );
  };

  return (
    <StyledHeader>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 50px' }}>
        <MenuButton color='inherit' onClick={handleOpen}>
          <Menu />
        </MenuButton>

        <Drawer open={open} onClose={handleClose}>
          {list()}
        </Drawer>

        <Component to='/'>
          <img src={logoURL} alt="logo" style={{ width: 75 }} />
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <SubHeading>
              Explore&nbsp;
              <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
            </SubHeading>
            <PlusLogo src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png" alt="plus logo" />
          </Box>
        </Component>

        <Search />

        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
