import { Box, Button, styled, Typography } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedButton from "./ButtonGroup";  // Correct import
import { removeFromCart ,incrementCartItem, decrementCartItem } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";


const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    display: flex;
    background: #fff;
    
`;

const LeftComponent = styled(Box)`
    margin: 20px;
    display: flex;
    flex-direction: column;
`;

const Smalltext = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`;

const Remove = styled(Button)`
    margin-top: 20px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`;

const CartItem = ({ item }) => {
    const fassured = "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

    const dispatch = useDispatch();
    const removeItemFromCart =(id) => {

        dispatch(removeFromCart(id));

    }
    return (
        <Component>
            <LeftComponent>
                <img src={item.url} alt="product" style={{ width: 110, height: 110 }} />
                <GroupedButton 
        quantity={item.quantity}
        onIncrement={() => dispatch(incrementCartItem(item.id))}
        onDecrement={() => dispatch(decrementCartItem(item.id))} />
            </LeftComponent>
            <Box style={{ margin: 20 }}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <Smalltext>
                    Seller:RetailNet
                    <Box component="span">
                        <img src={fassured} alt="flipkart" style={{ width: 50, marginLeft: 10 }} />
                    </Box>
                </Smalltext>
                <Typography style={{ margin: '20px 0' }}>
                    <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
                        ₹{item?.price?.cost}
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#878787" }}>
                        <strike>₹{item?.price?.mrp}</strike>
                    </Box>
                    &nbsp;&nbsp;&nbsp;
                    <Box component="span" style={{ color: "#388E3C" }}>
                        {item?.price?.discount}
                    </Box>
                </Typography>
                <Remove onClick={( ) => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
    );
}

export default CartItem;
