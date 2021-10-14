import React from "react";
import { IconButton, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface SearchBoxProps {
  searchValue: string;
  changeSearchValue: Function;
  searchEvent: Function;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  searchValue,
  changeSearchValue,
  searchEvent,
}) => {
  return (
    <TextField
      onChange={(event) => changeSearchValue(event.target.value)}
      value={searchValue}
      sx={{
        width: "35vw",
        // bgcolor: "#001e3c",
        "& label.Mui-focused": {
          color: "#001e3c",
        },
        "& .MuiInput-underline:after": {
          borderBottomColor: "#001e3c",
        },
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: "#000",
            color: "white",
          },
          "&:hover fieldset": {
            borderColor: "#41648a",
          },
          "&.Mui-focused fieldset": {
            borderColor: "#001e3c",
          },
        },
      }}
      label="Buscar Producto"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton size="large" onClick={() => searchEvent()} edge="end">
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBox;
