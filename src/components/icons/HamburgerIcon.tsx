'use client';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const HamburgerIcon = () => {
  return (
    <>
      <IconButton>
        <MenuIcon sx={{color: "black"}}/>
      </IconButton>
    </>
  );
};

export default HamburgerIcon;
