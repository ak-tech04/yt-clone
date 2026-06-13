import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setVideos(null);
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items),
    );
  }, [selectedCategory]);

  return (
    <Stack
      sx={{
        height: { sx: "auto", md: "92vh" },
        flexDirection: { sm: "column ", md: "row" },
      }}
    >
      <Box
        sx={{
          borderRight: { sx: "auto", md: "1px solid #3d3d3d" },
          px: { sx: "auto", md: 2 },
        }}
      >
        <SideBar
          currentCategory={{ selectedCategory, setSelectedCategory }}
        ></SideBar>
        <Typography>@copyright 2026</Typography>
      </Box>

      <Box
        sx={{
          ml: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "white" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>Videos</span>
        </Typography>
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
