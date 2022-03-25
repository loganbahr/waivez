import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import { DataGrid } from "@mui/x-data-grid";
import ClearIcon from "@mui/icons-material/Clear";
import SearchIcon from "@mui/icons-material/Search";
import NextLink from "next/link";
import { Link } from "@mui/material";

function escapeRegExp(value) {
  return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function QuickSearchToolbar(props) {
  return (
    <Box
      sx={{
        py: 1,
        height: "100px",
        // border: '2px solid red',
        display: "flex",
        justifyContent: "center",
        backgroundColor: "primary.main",
      }}
    >
      <TextField
        variant="standard"
        value={props.value}
        onChange={props.onChange}
        placeholder="Search for a company…"
        InputProps={{
          startAdornment: <SearchIcon fontSize="medium" />,
          endAdornment: (
            <IconButton
              title="Clear"
              aria-label="Clear"
              size="small"
              style={{ visibility: props.value ? "visible" : "hidden" }}
              onClick={props.clearSearch}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          ),
        }}
        sx={{
          width: { md: 500 },
          margin: { xs: 0, md: 0 },
          // border: '2px solid orange',
          borderRadius: "20px 20px",
          backgroundColor: "white",
          // m: (theme) => theme.spacing(1, 0.5, 1.5),
          "& .MuiSvgIcon-root": {
            mx: 0.5,
          },
          "& .MuiInput-underline:before": {
            borderBottom: 1,
            borderColor: "divider",
          },
          "& 	.MuiInput-root": {
            height: 200,
            fontSize: "2rem",
          },
        }}
      />
    </Box>
  );
}

QuickSearchToolbar.propTypes = {
  clearSearch: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const rowData = [
  {
    id: "naplesbeachwatersports",
    companyName: "Naples Beach Watersports",
    city: "Naples",
    state: "FL",
  },
  {
    id: "marcoislandwatersports",
    companyName: "Marco Island Watersports",
    city: "Marco Island",
    state: "FL",
  },
  {
    id: "augustawinery",
    companyName: "Augusta Winery",
    city: "Augusta",
    state: "MO",
  },
  {
    id: "fivestarvalet",
    companyName: "5 Star Valet",
    city: "Naples",
    state: "FL",
  },
  { id: "basecamp", companyName: "BaseCamp", city: "Avon", state: "CO" },
  {
    id: "floridaeverblades",
    companyName: "Florida Everblades",
    city: "Estero",
    state: "FL",
  },
  { id: "hertzarena", companyName: "Hertz Arena", city: "Estero", state: "FL" },
];
const columnData = [
  {
    field: "companyName",
    headerName: "Company Name",
    width: 600,
    renderCell: (params) => (
      <NextLink href={`partners/${params.id}`} passHref>
        <Link>{params.value}</Link>
      </NextLink>
    ),
  },
  { field: "city", headerName: "City", width: 350 },
  { field: "state", headerName: "State", width: 200 },
];

export default function QuickFilterPartnerDirectory() {
  // const { data } = useDemoData({
  //     dataSet: 'Employee',
  //     visibleFields: VISIBLE_FIELDS,
  //     rowLength: 1000,
  // });

  const [searchText, setSearchText] = React.useState("");
  const [rows, setRows] = React.useState(rowData);

  const requestSearch = (searchValue) => {
    setSearchText(searchValue);
    const searchRegex = new RegExp(escapeRegExp(searchValue), "i");
    const filteredRows = rowData.filter((row) => {
      return Object.keys(row).some((field) => {
        return searchRegex.test(row[field].toString());
      });
    });
    setRows(filteredRows);
  };

  React.useEffect(() => {
    setRows(rowData);
  }, [rowData]);

  return (
    <Box sx={{ height: 1000, width: 1 }}>
      <DataGrid
        components={{ Toolbar: QuickSearchToolbar }}
        rows={rows}
        columns={columnData}
        componentsProps={{
          toolbar: {
            value: searchText,
            onChange: (event) => requestSearch(event.target.value),
            clearSearch: () => requestSearch(""),
          },
        }}
      />
    </Box>
  );
}
