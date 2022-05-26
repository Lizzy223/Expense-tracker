import  React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: '', width: 30 },
  { field: 'date', headerName: 'Date', width: 130 },
  { field: 'merchant', headerName: 'Merchant', width: 130 },
  { field: 'total', headerName: 'Total', width: 90 },
  { field: 'status', headerName: 'Status', width: 90 },
  { field: 'comment', headerName: 'Comment', width: 130 },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: params =>
      `${params.row.date || ''} ${params.row.merchant || ''}`,
  },
];

const rows = [
  {
    id: '1',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '2',
    date: '05/25/2022',
    merchant: 'Breakfast',
    total: '$117.2',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '3',
    date: '05/25/2022',
    merchant: 'Office Supplies',
    total: '$105.17',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '4',
    date: '05/25/2022',
    merchant: 'Shuttle',
    total: '$76',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '5',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '6',
    date: '05/25/2022',
    merchant: 'Breakfast',
    total: '$117.2',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '7',
    date: '05/25/2022',
    merchant: 'Office Supplies',
    total: '$105.17',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '8',
    date: '05/25/2022',
    merchant: 'Shuttle',
    total: '$76',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '9',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
  {
    id: '10',
    date: '05/25/2022',
    merchant: 'Taxi',
    total: '$565.38',
    status: 'Rembursed',
    comment: 'Expense from my buisness trip',
  },
];

export default function Table() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
