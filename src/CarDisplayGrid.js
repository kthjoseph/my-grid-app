import React, { useEffect, useState } from "react";

import { ImageFormatter } from './ImageFormatter.js';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import "ag-grid-enterprise";
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

export function CarDisplayGrid() {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState([]);
    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        const updateData = (data) => {
            setRowData(data);
        };

        fetch('https://6157228e8f7ea600179850e4.mockapi.io/api/vehicles')
            .then((resp) => resp.json())
            .then((data) => updateData(data));
    };

    return (
        <div className="ag-theme-balham"
            style={{ height: '400px', width: '800px' }}
        >
            <AgGridReact
                defaultColDef={{ sortable: false, filter: false }}
                pagination={false}
                rowData={rowData}
                //columnDefs={colDefs}
                rowHeight={100}
                masterDetail={true}
                frameworkComponents={{
                    imageFormatter: ImageFormatter
                }}
                onGridReady={onGridReady}
                detailCellRendererParams={{
                    detailGridOptions: {
                        rowSelection: 'multiple',
                        suppressRowClickSelection: true,
                        enableRangeSelection: true,
                        pagination: false,
                        paginationAutoPageSize: true,
                        detailRowAutoHeight: true,
                        columnDefs: [
                            { field: 'color' },
                            { field: 'price' },
                            { field: 'range', valueFormatter: "x.distance + ' ' + x.unit" }
                        ],
                        defaultColDef: {
                            sortable: true,
                            flex: 1,
                        },
                    },
                    getDetailRowData: function (params) {
                        const make = params.data.make;
                        const model = params.data.model
                        const detail = [];
                        rowData.forEach(function(data) {
                            if (data.make === make && data.model === model) {
                                detail.push({
                                    color: data.colors,
                                    price: data.price,
                                    range: data.range
                                });
                            }
                        })
                        params.successCallback(detail);
                    },
                }}>
                <AgGridColumn field="photo" cellRenderer="imageFormatter" />
                <AgGridColumn field="make" ></AgGridColumn>
                <AgGridColumn field="model" cellRenderer="agGroupCellRenderer" ></AgGridColumn>
                <AgGridColumn field="price" sortable={true}></AgGridColumn>
            </AgGridReact>
        </div>
    );
}