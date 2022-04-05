import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { findParentElementFromClassName } from "@mui/x-data-grid/internals";

const SearchBar = (props) => {
  const [value, setValue] = useState("");
  const router = useRouter();

  /**
   * Attempts to route the user to a given page if it exists when they click an entry in autocomplete.
   * Use effect hook triggers when value changes (to make sure its updated)
   */
  useEffect(() => {
    if (value) {
      router.push(value.url);
    }
  }, [value]);

  // Ask logan, where should we store companies.

  return (
    <Box
      sx={{
        backgroundColor: "clear",
        width: "100%",
        display: "flex",
        justifyContent: "center",
          mt: 10
      }}
    >
      <Autocomplete
        selectOnFocus
        clearOnBlur
        handleHomeEndKeys
        options={Object.keys(props.partners).map((partner) => {
          return {
            title: props.partners[partner].title,
            url: "/partners/" + partner,
          };
        })}
        value={value}
        freeSolo
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
          borderRadius: 5,
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
};

export default SearchBar;
