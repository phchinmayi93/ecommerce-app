import { Box, Typography, Menu, MenuItem ,styled} from "@mui/material";
import { useState } from "react";
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';


const Component = styled(Menu)`
    margin-top: 10px;
    
`

const  Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`
const Profile = ({ account, setAccount }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const logoutUser =() =>{
    setAccount('');
  }

  return (
    <>
      <Box onClick={handleClick} style={{ cursor: 'pointer' }}>
        <Typography style={{ marginTop: 2 , cursor:'pointer'}}>{account}</Typography>
      </Box>

      <Component
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
        <PowerSettingsNewIcon  color="primary" fontSize="small"/><Logout>Logout</Logout></MenuItem>
       
      </Component>
    </>
  );
};

export default Profile;
