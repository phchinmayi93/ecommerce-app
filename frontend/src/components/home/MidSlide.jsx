import { Box, styled } from "@mui/material";
import Slide from "./Slide";


const Component = styled(Box)`
    display: flex;
`
const LeftComponent = styled(Box)(({ theme }) => ({
    width:'89%',
     [theme.breakpoints.down('md')]:{
  width:'100%'
     }
    

}))
const RightComponent = styled(Box)(({ theme }) => ({
  background: '#ffffff',
  padding: 5,
  marginTop: 7,
  marginLeft: 10,
  width: '17%',
  textAlign:'center',
  [theme.breakpoints.down('md')]:{
    display:'none'
}
}));


const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';



const MidSlide = ({products, title, timer}) => {
  
const adurl = 'https://rukminim2.flixcart.com/fk-p-flap/530/810/image/8e3b3b56c0e8354e.jpeg?q=80';
    return(
        <Component>
            <LeftComponent>
                <Slide
                    products={products} 
                    title={title}
                     timer={timer} />
            </LeftComponent>
            <RightComponent>
                <img src={adurl} alt="ad" style={{width:190}}/>
            </RightComponent>
        </Component>
    )
}

export default MidSlide;