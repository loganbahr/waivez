import * as React from 'react';
import {DataGrid} from '@mui/x-data-grid';

const columns = [
    {field: 'companyName', headerName: 'Company Name', width: 600},
    {field: 'city', headerName: 'City', width: 350},
    {field: 'state', headerName: 'State(s)', width: 200}
];

const rows = [
    {id: 1, companyName: 'Naples Beach Watersports', city: 'Naples', state: 'FL'},
    {id: 2, companyName: 'Marco Island Watersports', city: 'Marco Island', state: 'FL'},
    {id: 3, companyName: 'Augusta Winery', city: 'Augusta', state: 'MO'},
    {id: 4, companyName: '5 Star Valet', city: 'Naples', state: 'FL'},
    {id: 5, companyName: 'BaseCamp', city: 'Avon', state: 'CO'},
    {id: 6, companyName: 'Florida Everblades', city: 'Estero', state: 'FL'},
    {id: 7, companyName: 'Hertz Arena', city: 'Estero', state: 'FL'},
];

export default function PartnerDirectory() {
    return (
        <div style={{height: '100%', width: '100%', border: '3px solid #7F00FF'}}>

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={rows.length}
                rowsPerPageOptions={[5]}
                autoHeight={true}
                sx={{
                    fontFamily: 'Poppins, sans-serif',
                    fontSize: '1.5rem',
                    letterSpacing: 0.7
                }}
            />
        </div>
    );
}
