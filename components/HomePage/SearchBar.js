import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import {Box} from "@mui/material";

export default function SearchBar() {
    const [value, setValue] = React.useState(null);

    return (
        <Box sx={{
            backgroundColor: 'clear',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            my: 10,
        }}>
            <Autocomplete
                value={value}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                options={partners}
                getOptionLabel={(option) => {
                    // Value selected with enter, right from the input
                    if (typeof option === 'string') {
                        return option;
                    }
                    // Add "xxx" option created dynamically
                    if (option.inputValue) {
                        return option.inputValue;
                    }
                    // Regular option
                    return option.title;
                }}
                renderOption={(props, option) => <li {...props}>{option.title}</li>}
                sx={{
                    width: '85%',
                    border: '4px solid',
                    borderColor: 'primary',
                    borderRadius: '25px 25px 25px 25px',

                    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                        fontSize: {xs: '19px', sm: '26px'},
                    },
                }}

                renderInput={(params) => (
                    <TextField {...params} label="Search for a company!"/>
                )}
            />
        </Box>
    );
}

// TODO: need to make a new file that contains all of the partners, then that list is populated into the search bar.
const partners = [
    {title: 'Marco Island Watersports', url: '/partners/marcoislandwatersports'},
    {title: 'Naples Beach Watersports', url: '/partners/naplesbeachwatersports'},
];

