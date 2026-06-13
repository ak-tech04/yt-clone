import { categories } from "../utils/constants";
import { Stack } from "@mui/material";

// const selectedCategory = "New";
const SideBar = ({ currentCategory }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
        scrollbarWidth: "none",
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          style={{
            background:
              category.name === currentCategory.selectedCategory && "#FC1503",
            color: "#fff",
          }}
          onClick={() => currentCategory.setSelectedCategory(category.name)}
          key={category.name}
        >
          <span
            style={{
              color:
                category.name === currentCategory.selectedCategory
                  ? "white"
                  : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              opacity:
                category.name === currentCategory.selectedCategory
                  ? "1"
                  : "0.8",
            }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default SideBar;
