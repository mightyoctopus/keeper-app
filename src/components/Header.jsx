import React from "react";
import HighlightIcon from '@mui/icons-material/Highlight';


function Header() {
  return (
    <header>
      <h1><HighlightIcon 
      color="primary" 
      fontSize="medium" 
      /><a href='/' style={{textDecoration: 'none'}}>Keeper</a></h1>
    </header>
  );
}

export default Header;
