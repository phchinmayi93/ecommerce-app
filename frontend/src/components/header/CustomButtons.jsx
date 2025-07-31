import { useState, useContext } from 'react';

import {Box , styled,Button, Typography} from '@mui/material';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginDialog from '../login/LoginDialog';

import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';



const Wrapper= styled(Box)`

  display: flex;
  align-items: center;
  /* padding: 0 20px; */
  color: #fff;
  height: 56px;
  border-radius: 4px;
  gap: 40px; /* space between children */


  margin-right: 250px;   /* ✅ Removes extra space */

  & > button,
  & > p,
  & > div {
    font-size: 14px;
  }
`;



const Container = styled(Box)`
    display: flex;  
    `

const LoginButton = styled(Button)`
    background-color: #fff;     
    color: #2874f0;
    padding: 8px 40px;
    border-radius: 4px; 
   
    text-transform: none;
    font-weight: 600;
    &:hover {
        background-color: #f0f0f0;
    }
    border: none;

    cursor: pointer;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    transition: background-color 0.3s ease;
`;

const CustomButtons = () => {
  const [open, setOpen] = useState(false)

  const {account} = useContext(DataContext);

  const openDialog = () => {
    setOpen(true);
  }
   return (
    <Wrapper>
      {
        account ? <Profile account={account} />:
        <LoginButton style={{margin:'6px'}}variant='contained' onClick={() => openDialog()}>Login</LoginButton>

      }
      

      <Typography >Become a Seller</Typography>
      <Typography>More</Typography>

      <Container>
        <ShoppingCartIcon style={{ color: '#fff' }} />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog  open= {open} setOpen={setOpen}/>
    </Wrapper>
  );
}
export default CustomButtons;