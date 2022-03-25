import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {DataGrid} from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';
import {Stack} from "@mui/material";

function escapeRegExp(value) {
    return value.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

function QuickSearchToolbar(props) {
    return (
        <Box
            sx={{
                py: 1,
                height: {xs: 60, sm: 70, md: 80, lg: 90},
                // border: '2px solid red',
                display: 'flex',
                justifyContent: 'center',
                backgroundColor: 'primary.main',
            }}
        >
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search for a company…"
                InputProps={{
                    disableUnderline: true,
                    startAdornment: <SearchIcon fontSize="medium"/>,
                    endAdornment: (
                        <IconButton
                            title="Clear"
                            aria-label="Clear"
                            size="small"
                            style={{visibility: props.value ? 'visible' : 'hidden'}}
                            onClick={props.clearSearch}
                        >
                            <ClearIcon fontSize="small"/>
                        </IconButton>
                    ),
                }}
                sx={{
                    width: {xs: '100%', sm: '70%', md: '50%'},
                    margin: {xs: 0, md: 0},
                    // border: '2px solid orange',
                    borderRadius: '20px 20px',
                    backgroundColor: 'white',
                    // m: (theme) => theme.spacing(1, 0.5, 1.5),
                    '& .MuiSvgIcon-root': {
                        mx: 2,
                        color: 'primary.main'
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: 1,
                        borderColor: 'divider',
                    },
                    '& 	.MuiInput-root': {
                        height: '100%',
                        fontSize: {xs: '1rem', sm: '1.1rem', md: '1.2rem'},
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
// {id: , companyName: '', city: '', state: ''},
const rowData = [
    {id: 1, companyName: 'Naples Beach Watersports', city: 'Naples', state: 'FL'},
    {id: 2, companyName: 'Marco Island Watersports', city: 'Marco Island', state: 'FL'},
    {id: 3, companyName: 'Augusta Winery', city: 'Augusta', state: 'MO'},
    {id: 4, companyName: '5 Star Valet', city: 'Naples', state: 'FL'},
    {id: 5, companyName: 'BaseCamp', city: 'Avon', state: 'CO'},
    {id: 6, companyName: 'Florida Everblades', city: 'Estero', state: 'FL'},
    {id: 7, companyName: 'Hertz Arena', city: 'Estero', state: 'FL'},
    {id: 8, companyName: 'Mid American Coaches', city: 'Washington', state: 'MO'},
    {id: 9, companyName: 'The Java Butler', city: 'SWFL', state: 'FL'},
    {id: 10, companyName: 'Mount Pleasant Estates', city: 'Augusta', state: 'MO'},
    {id: 11, companyName: 'NOA Medical Industries', city: 'St. Louis', state: 'MO'},
    {id: 12, companyName: 'Osprey Capital', city: 'Chicago', state: 'IL'},
    {id: 13, companyName: 'Naples Transportation & Tours', city: 'Naples', state: 'FL'},
    {id: 14, companyName: 'The Old Collier Golf Club', city: 'Naples', state: 'FL'},
    {id: 15, companyName: 'Hoffmann Executive Suites', city: 'Naples', state: 'FL'},

];

const columnData = [
    {
        field: "companyName",
        headerName: "Company Name",
        flex: 1,
        minWidth: 200,
        renderCell: (params) => <a href={params.id}>{params.value}</a>,
    },
    {field: "city", headerName: "City", minWidth: 100, flex: 1},
    {field: "state", headerName: "State", minWidth: 50, flex: 1},
];


export default function QuickFilterPartnerDirectory() {

    // const { data } = useDemoData({
    //     dataSet: 'Employee',
    //     visibleFields: VISIBLE_FIELDS,
    //     rowLength: 1000,
    // });

    const [searchText, setSearchText] = React.useState('');
    const [rows, setRows] = React.useState(rowData);

    const requestSearch = (searchValue) => {
        setSearchText(searchValue);
        const searchRegex = new RegExp(escapeRegExp(searchValue), 'i');
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
        // the DataGrid doesn't care about the size of the Box
        <Box>
            <DataGrid
                // loading={true} a nice loading ring
                components={{
                    Toolbar: QuickSearchToolbar,
                    NoRowsOverlay: () => (
                        <Stack height="100%" alignItems="center" justifyContent="center">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Hmm...that company isn't a partner with us — yet!
                        </Stack>)
                }}
                // autoPageSize={true} this breaks the grid for some reason
                pageSize={10}
                autoHeight={true}
                // rowSpacingType='border'
                rows={rows}
                columns={columnData}
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event) => requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
                sx={{
                    border: '4px solid #7F00FF',
                    // height: 1000,
                    // flex: 1,
                    fontSize: {xs: '0.85rem', sm: '1.1rem', md: '1.2rem'},
                    '& .MuiDataGrid-columnHeader': {
                        fontSize: {xs: '1.1rem', sm: '1.3rem', md: '1.5rem'},
                        fontFamily: 'Poppins, sans-serif',
                        color: 'primary.main',
                        // borderBottom: '10px solid #7F00FF',
                    },
                    '& .MuiDataGrid-columnHeaderTitleContainer': {},
                    '& .MuiDataGrid-columnHeader--sortable': {},

                    '& .MuiDataGrid-row': {
                        borderBottom: '2px solid #7F00FF',
                    },


                }}
            />
        </Box>
    );
}
