/**
 * @file WaiverSelection.js
 * @author Logan Bahr
 * @description Displays multiple waivers.
 * @since 3/28/22
 */

import React, {useEffect, useState} from 'react';
import {DataGrid} from '@mui/x-data-grid';
import Box from "@mui/material/Box";

const WaiverSelection = (props) => {

    //TODO: convert the row/column data to a JSON file that is supplied by the back-end

    const columns = [
        {
            field: 'id',
            headerName: 'ID',
            width: 50,
            // flex: 1,

        },
        {
            field: 'documentType',
            headerName: 'Type',
            minWidth: 160,
            editable: false,
            flex: 1,
        },
    ];

    useEffect(() => console.log(props.waivers), []);

    // use 'selectionModel' to populate the correct forms
    // const [selectionModel, setSelectionModel] = useState(() => {
    //     return rows.map((r) => r.id);
    // });

    return (
        <Box sx={{mb: 2}}>
            <DataGrid
                rows={Object.keys(props.waivers).map((waiverId, idx) => {
                    return {
                        id: waiverId,
                        documentType: props.waivers[waiverId].metadata.name,
                    }
                })}
                columns={columns}
                pageSize={5}
                disableColumnMenu={true}
                hideFooter={true}
                rowsPerPageOptions={[5]}
                checkboxSelection={true}
                selectionModel={props.selectedWaivers}
                onSelectionModelChange={props.setSelectedWaivers}
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
                    "& .MuiDataGrid-columnHeaderTitleContainer": {},
                    "& .MuiDataGrid-columnHeader--sortable": {},

                    "& .MuiDataGrid-row": {
                        borderBottom: "2px solid #7F00FF",
                    },
                }}
            />
        </Box>
    );
};

export default WaiverSelection;
