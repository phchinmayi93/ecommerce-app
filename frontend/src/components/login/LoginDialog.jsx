import { Dialog, TextField , Box, Button, Typography,styled} from "@mui/material";

const Component = styled(Box)`
    

`
const LoginDialog = ({ open, setOpen}) => {

    const handleClose = () => {
        setOpen(false);
    }
    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box></Box>
                <Box>
                    <TextField variant="standard" label="Enter Email/Mobile No"/>
                    <TextField variant="standard" label="Enter Password"/>
                     <TextField variant="standard" label="By continuing, you agree to flipkart's Terms of use and Privacy Policy"/>
                     <Button>Login</Button>
                     <Typography>OR</Typography>
                     <Button>Request OTP</Button>
                     <Typography>New to Flipkart?Create an account</Typography>
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;
