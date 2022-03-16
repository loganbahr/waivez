import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import {Box} from "@mui/material";

const filter = createFilterOptions();

export default function LandingPageSearchBar() {
    const [value, setValue] = React.useState(null);

    return (
        <Box sx={{
            backgroundColor: 'clear',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            mt: '100px'
        }}>
            <Autocomplete
                value={value}
                onChange={(event, newValue) => {
                    if (typeof newValue === 'string') {
                        setValue({
                            title: newValue,
                        });
                    } else if (newValue && newValue.inputValue) {
                        // Create a new value from the user input
                        setValue({
                            title: newValue.inputValue,
                        });
                    } else {
                        setValue(newValue);
                    }
                }}
                filterOptions={(options, params) => {
                    const filtered = filter(options, params);

                    const {inputValue} = params;
                    // Suggest the creation of a new value
                    const isExisting = options.some((option) => inputValue === option.title);
                    if (inputValue !== '' && !isExisting) {
                        filtered.push({
                            inputValue,
                            title: `Add "${inputValue}"`,
                        });
                    }
                    return filtered;
                }}
                selectOnFocus
                clearOnBlur
                handleHomeEndKeys
                id="free-solo-with-text-demo"
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
                    width: '90%',
                    border: '4px solid #7F00FF',
                    borderRadius: '25px 25px 25px 25px',
                    "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                        fontSize: {xs: '23px', sm: '28px'},
                        fontFamily: "Poppins, sans-serif",
                        color: '#7F00FF',

                    }
                }}
                freeSolo
                renderInput={(params) => (
                    <TextField {...params} label="Search for a company!"/>
                )}
            />
        </Box>
    );
}

const partners = [
    {title: 'Marco Island Watersports'},
    {title: 'Naples Beach Watersports'},
];

