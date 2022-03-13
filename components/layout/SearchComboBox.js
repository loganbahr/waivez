import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {

    return (
        <Autocomplete
            id="combo-box-demo"
            options={allCompanies}
            sx={{
                backgroundColor: '#7F00FF',
                width: '45%',
                borderRadius: '25px 25px 25px 25px',
                // ROOT
                "& .css-14s5rfu-MuiFormLabel-root-MuiInputLabel-root": {
                    color: 'white',
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.7rem',
                },
                // POPOUT
                "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
                    color: 'red',
                },
            }}
            renderInput={(params) => <TextField {...params} label="Search for a company to waive"/>}
        />
    );
}

const allCompanies = [
    {label: 'Marco Island Watersports'},
    {label: 'Naples Beach Watersports'}
];
