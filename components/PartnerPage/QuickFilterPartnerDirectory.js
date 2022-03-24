import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import {DataGrid} from '@mui/x-data-grid';
import ClearIcon from '@mui/icons-material/Clear';
import SearchIcon from '@mui/icons-material/Search';

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
                        mx: 1,
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

const rowData = [
    {id: 1, companyName: 'Naples Beach Watersports', city: 'Naples', state: 'FL'},
    {id: 2, companyName: 'Marco Island Watersports', city: 'Marco Island', state: 'FL'},
    {id: 3, companyName: 'Augusta Winery', city: 'Augusta', state: 'MO'},
    {id: 4, companyName: '5 Star Valet', city: 'Naples', state: 'FL'},
    {id: 5, companyName: 'BaseCamp', city: 'Avon', state: 'CO'},
    {id: 6, companyName: 'Florida Everblades', city: 'Estero', state: 'FL'},
    {id: 7, companyName: 'Hertz Arena', city: 'Estero', state: 'FL'},
];

// const columnData = [
//     {field: 'companyName', headerName: 'Company Name', width: 600},
//     {field: 'city', headerName: 'City', width: 350},
//     {field: 'state', headerName: 'State', width: 200}
// ];

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
        // the DataGrid just follows the size of the Box
        <Box
            sx={{
                height: '100vh',
                width: 'auto',
                // border: '10px solid yellow'
            }}>
            <DataGrid
                components={{Toolbar: QuickSearchToolbar}}
                autoPageSize={true}
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
                    border: '2px solid #7F00FF',
                    '& .MuiDataGrid-columnHeader':{
                        fontSize: {xs: '1.1rem', sm: '1.3rem', md: '1.5rem'},
                        fontFamily: 'Poppins, sans-serif',
                        color: 'primary.main'
                    },
                    fontSize: {xs: '0.85rem', sm: '1.1rem', md: '1.2rem'},
                }}
            />
        </Box>
    );
}
