'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Button } from '@mui/material';

export default function SearchButton() {
  return (
    <Paper
      component="form"
      sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto', boxShadow: "0", borderRadius: "0px 0px 5px 5px" }}
    >
        <button className='w-[97%] m-auto bg-[#fa541c] p-4 rounded-lg'>
        <SearchIcon sx={{color: "white", fontSize: "200%"}}/>

        </button>
    </Paper>
  );
}