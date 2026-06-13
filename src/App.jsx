import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import {
  Feed,
  ChannelDetail,
  VideoDetail,
  SearchFeed,
  Navbar,
} from "./components";
import { Box } from "@mui/material";

function App() {
  return (
    <BrowserRouter>
      <Box>
        <Navbar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetail />} />
          <Route path="/channel/:id" element={<ChannelDetail />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
