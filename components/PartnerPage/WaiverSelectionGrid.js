import React, {useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Box from "@mui/material/Box";

const WaiverSelectionGrid = () => {

    const rows = [
        {
            id: '1',
            documentName: 'General Liability',
            location: 'Ritz Carlton',
        },
        {
            id: '2',
            documentName: 'WaveRunner Release',
            location: 'Ritz Carlton',
        },
        {
            id: '3',
            documentName: 'Hotel Release',
            location: 'Ritz Carlton',
        },
    ];

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            // flex: 1,

        },
        {
            field: 'documentName',
            headerName: 'Document Type',
            minWidth: 160,
            editable: false,
            flex: 1,
        },
        {
            field: 'location',
            headerName: 'Location',
            minWidth: 130,
            editable: false,
            flex: 1,
        },
    ];

    // use 'selectionModel' to populate the correct forms
    const [selectionModel, setSelectionModel] = useState(() => {
        return rows.map((r) => r.id);
    });

    return (
        <Box style={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection={true}
                selectionModel={selectionModel}
                onSelectionModelChange={setSelectionModel}
                autoHeight={true}
                sx={{
                    border: "4px solid #7F00FF",
                    // height: 1000,
                    // flex: 1,
                    fontSize: {xs: "0.85rem", sm: "1.1rem", md: "1.2rem"},
                    "& .MuiDataGrid-columnHeader": {
                        fontSize: {xs: "1.1rem", sm: "1.3rem", md: "1.5rem"},
                        fontFamily: "Poppins, sans-serif",
                        color: "primary.main",
                        // borderBottom: '10px solid #7F00FF',
                    },
                    "& .MuiDataGrid-row": {
                        borderBottom: "2px solid #7F00FF",
                    },
                }}
            />
        </Box>
    );
};

export default WaiverSelectionGrid;
