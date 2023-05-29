'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';import DirectionsIcon from '@mui/icons-material/Directions';

export default function LocationLandingInput() {
  return (
    <Paper
      component="form"
      sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto', boxShadow: "0", borderRadius: "0px 0px 0px 0px" }}
    >
      <IconButton aria-label="menu" disabled>
        <LocationOnIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Locations"
        inputProps={{ 'aria-label': 'Locations' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <KeyboardArrowDownIcon />
      </IconButton>
    </Paper>
  );
}