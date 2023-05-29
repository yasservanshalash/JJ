'use client';

import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function JobtitleInputLanding() {
  return (
    <Paper
      component="form"
      sx={{ p: '10px 4px', display: 'flex', alignItems: 'center', width: '90%', margin: '0 auto', boxShadow: "0",borderRadius: "5px 5px 0px 0px" }}
    >
      <IconButton aria-label="menu" disabled>
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Job title, keywords..."
        inputProps={{ 'aria-label': 'search jobs' }}
      />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        <KeyboardArrowDownIcon />
      </IconButton>
    </Paper>
  );
}