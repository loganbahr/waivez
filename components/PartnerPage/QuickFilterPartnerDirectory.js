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
                p: 0.5,
                pb: 0,
            }}
        >
            <TextField
                variant="standard"
                value={props.value}
                onChange={props.onChange}
                placeholder="Search for a company…"
                InputProps={{
                    startAdornment: <SearchIcon fontSize="small"/>,
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
                    width: {
                        xs: 1,
                        sm: 'auto',
                        border: '2px solid red'
                    },
                    m: (theme) => theme.spacing(1, 0.5, 1.5),
                    '& .MuiSvgIcon-root': {
                        mr: 0.5,
                    },
                    '& .MuiInput-underline:before': {
                        borderBottom: 1,
                        borderColor: 'divider',
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
const columnData = [
    {field: 'companyName', headerName: 'Company Name', width: 600},
    {field: 'city', headerName: 'City', width: 350},
    {field: 'state', headerName: 'State(s)', width: 200}
];

// TODO: not sure how useDemoData is formatting 'data', and what the function is doing to transform it into the table
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
        <Box sx={{height: 1000, width: 1}}>
            <DataGrid
                components={{Toolbar: QuickSearchToolbar}}
                rows={rows}
                columns={columnData}
                componentsProps={{
                    toolbar: {
                        value: searchText,
                        onChange: (event) => requestSearch(event.target.value),
                        clearSearch: () => requestSearch(''),
                    },
                }}
            />
        </Box>
    );
}