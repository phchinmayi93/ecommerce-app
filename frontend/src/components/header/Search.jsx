import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const SearchWrapper = styled(Box)`
    background-color: #fff; 
    width: 38%;
    border-radius: 2px;     
    margin-left: 10px;
    display: flex;
    align-items: center;    
    padding: 5px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const InputBaseSearch= styled(InputBase)`
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
`;

const Search = () => {
    return (
       <SearchWrapper>
     <InputBaseSearch placeholder='Search For Products'/>
     <SearchIconStyled >
            <SearchIcon style={{ color: '#2874f0', marginLeft: 10 }} />
    <SearchIconStyled />
     </SearchIconStyled>
     </SearchWrapper>
    )
}

export default Search;