import { InputBase, Box, styled, List, ListItem } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productActions";
import { Link } from "react-router-dom";

const SearchContainer = styled(Box)`
  position: relative;
  width: 38%;
  margin-left: 10px;
`;

const SearchWrapper = styled(Box)`
  background-color: #fff; 
  border-radius: 2px;     
  display: flex;
  align-items: center;    
  padding: 5px 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputBaseSearch = styled(InputBase)`
  width: 100%;             
  padding-left: 10px;
  font-size: 14px;
  color: #000;
  &::placeholder {
    color: #888;
  }   
  &:focus {
    outline: none;
  }
`;

const SearchIconStyled = styled(SearchIcon)`
  color: #2874f0;
  cursor: pointer;
  margin-left: 10px;
`;

const SuggestionList = styled(List)`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
  max-height: 300px;
  overflow-y: auto;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  color: #000;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  width: 100%;
  display: block;
  padding: 8px 16px;

  &:hover {
    background-color: #f4f4f4;
  }
`;

const Search = () => {
  const [text, setText] = useState('');
  const { products } = useSelector(state => state.getProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const filteredProducts = text
    ? products.filter(product =>
        product.title.longTitle.toLowerCase().includes(text.toLowerCase())
      )
    : [];

  return (
    <SearchContainer>
      <SearchWrapper>
        <InputBaseSearch 
          placeholder='Search For Products' 
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <SearchIconStyled />
      </SearchWrapper>

      {text && filteredProducts.length > 0 && (
        <SuggestionList>
          {filteredProducts.map(product => (
            <ListItem key={product.id} disablePadding>
              <StyledLink 
                to={`/product/${product.id}`} 
                onClick={() => setText('')}
              >
                {product.title.longTitle}
              </StyledLink>
            </ListItem>
          ))}
        </SuggestionList>
      )}
    </SearchContainer>
  );
};

export default Search;
