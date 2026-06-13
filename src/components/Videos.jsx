import { Box, Stack } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {
  //   console.log(videos);
  return (
    <Stack
      direction={direction || "row"}
      sx={{
        flexWrap: "wrap",
        alignItems: "start",
        justifyContent: "start",
      }}
      gap={2}
    >
      {videos == null || undefined ? (
        <div>Failed to load Videos</div>
      ) : (
        videos.map((item, idx) => {
         return <Box key={idx}>
            {/* {console.log(item)} */}
            {/* console.log(item) */}
            {/* <VideoCard videoDetail={item}></VideoCard> */}
            {<VideoCard videoDetail={item}  />}
            {/* <Box>
              {item.id.channelId && <ChannelCard channelDetail={item} />}
            </Box> */}
            ;
          </Box>;
        })
      )}
    </Stack>
  );
};

export default Videos;
