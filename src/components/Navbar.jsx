import React from "react";
import { logo } from "../utils/constants.jsx";
import { Box, Stack } from "@mui/material";
import { Link } from "react-router";
import SearchBar from "./SearchBar.jsx";

const Navbar = () => {
  return (
  <Stack direction="row"  p={2} sx={{ alignItems : 'center', position:  "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
    </Link>
    <SearchBar />
  </Stack>

  );
};

export default Navbar;
