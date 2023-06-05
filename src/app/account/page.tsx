"use client";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { InputBase, Link, TextField, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import CorporateFareOutlinedIcon from "@mui/icons-material/CorporateFareOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import Button from "@mui/material/Button";

const Item = styled(Paper)(({ theme }) => ({
  //   backgroundColor: "theme.palette.mode === 'dark' ? '#1A2027' : '#fff'",
  // backgroundColor: "#CCC",
  background: "none",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  boxShadow: "none",
  borderRadius: 0,
}));

export default function Account() {
  return (
    <Box sx={{ maxWidth: 1200, mx: "auto", pt: 5, pl: 2 }}>
      <Typography
        variant="h4"
        sx={{ color: "black", fontWeight: 500, pl: 2, mb: 2 }}
      >
        Account
      </Typography>
      <Grid container sx={{ p: 1 }}>
        <Grid
          item
          xs={0}
          md={3}
          sx={{
            display: { xs: "none", md: "grid" },
            border: 1,
            borderColor: "#CCC",
            borderRadius: 3,
            mt: 2,
            maxHeight: "500px",
          }}
        >
          <Item
            sx={{
              borderBottom: 1,
              borderStyle: "dashed",
              borderColor: "#CCC",
              p: 3,
            }}
          >
            <Box sx={{ display: "flex", flexDirection: "column", rowGap: 3 }}>
              <Stack direction="row" alignItems="center" spacing={1}>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{ width: 56, height: 56 }}
                />
                <BorderColorOutlinedIcon />
                <Typography variant="body2">change photo</Typography>
              </Stack>
              <Box sx={{ textAlign: "left" }}>
                <Typography sx={{ fontWeight: 500, color: "black" }}>Dragos Tudor</Typography>
                <Typography variant="body2">dragos@tudor.com</Typography>
              </Box>
            </Box>
          </Item>

          <Item
            sx={{ borderBottom: 1, borderStyle: "dashed", borderColor: "#CCC" }}
          >
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <PersonOutlineOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Personal Info" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <InsertDriveFileOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Resume" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <BookmarkBorderOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="My Jobs" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <CorporateFareOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Companies" />
                </ListItemButton>
              </ListItem>
            </List>
          </Item>

          <Item>
            <List
              sx={{ width: "100%", bgcolor: "background.paper" }}
              aria-label="contacts"
            >
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Log Out" />
                </ListItemButton>
              </ListItem>
            </List>
          </Item>
        </Grid>

        {/* PERSONAL */}

        <Grid item xs={12} md={9} sx={{ pl: { xs: 0, md: 3 } }}>
          <Item sx={{ textAlign: "left" }}>
            <Typography variant="h6" sx={{color: "black"}}>Personal</Typography>
          </Item>
          <Item sx={{ textAlign: "left" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                columnGap: 2,
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  rowGap: 3,
                }}
              >
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="First Name"
                  variant="filled"
                />
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Last Name"
                  variant="filled"
                />
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Location"
                  variant="filled"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  rowGap: 3,
                }}
              >
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Role"
                  variant="filled"
                />
                <TextField
                  id="outlined-basic"
                  size="small"
                  label="Phone Number"
                  variant="filled"
                />
              </Box>
            </Box>
          </Item>
          <Item sx={{ textAlign: "left", mt: 3 }}>
            <Typography variant="h6" sx={{color: "black"}}>Change Password</Typography>
          </Item>
          <Item>
            {/* <Box sx={{display: "flex", flexDirection: {xs: "column", md: "row"}, columnGap: 2, justifyContent: "space-between"}}> */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                flexGrow: 1,
                rowGap: 3,
              }}
            >
              <TextField
                id="outlined-basic"
                size="small"
                label="Old Password"
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="New Password"
                variant="filled"
              />
              <TextField
                id="outlined-basic"
                size="small"
                label="Confirm New Password"
                variant="filled"
              />
              <button
                style={{
                  border: "1px solid gray",
                  marginTop: "20px",
                  padding: "15px 15px",
                  borderRadius: "10px",
                  width: "200px",
                }}
                className="bg-black text-white font-semibold hover:bg-[#212b36] hover:text-white hover:border-solid hover:border-black"
              >
                Save Changes
              </button>
            </Box>
            {/* </Box> */}
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
