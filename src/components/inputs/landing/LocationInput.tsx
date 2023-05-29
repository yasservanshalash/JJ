'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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