import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { useState } from "react";

export default function SearchBar() {
  const [value, setValue] = useState("");

  // Ask logan, where should we store companies.

  return (
    <Box
      sx={{
        backgroundColor: "clear",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 10,
      }}
    >
      <Autocomplete
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={partners}
        value={value}
        onChange={(_e, nv) => setValue(nv)}
        getOptionLabel={(option) =>
          typeof option.title === "string" || option.title instanceof String
            ? option.title
            : ""
        }
        renderOption={(props, option) => <li {...props}>{option.title}</li>}
        sx={{
          width: "85%",
          border: "3px solid",
          borderColor: "primary",
          borderRadius: "25px 25px 25px 25px",
          "& .MuiAutocomplete-inputRoot": {
            fontSize: { xs: "19px", sm: "26px" },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&:hover .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
          },
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search for a company!"
            InputLabelProps={{
              sx: {
                fontSize: { xs: "19px", sm: "26px" },
              },
            }}
            sx={{
              "& .MuiInputLabel-shrink": {
                transform: "translate(5%, -100%)",
              },
            }}
          />
        )}
      />
    </Box>
  );
}

// TODO: need to make a new file that contains all of the partners, then that list is populated into the search bar.
const partners = [
  {
    title: "Marco Island Watersports",
    url: "/partners/marcoislandwatersports",
  },
  {
    title: "Naples Beach Watersports",
    url: "/partners/naplesbeachwatersports",
  },
];
