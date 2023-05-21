import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box } from '@mui/material';



const columns = [
  { field: 'id', headerName: 'Country', width: 130 },
  { field: 'population', headerName: 'Population', type: 'number', width: 130, },
  { field: 'active', headerName: 'Active Cases', type: 'number', width: 130 },
  { field: 'critical', headerName: 'Critical Cases', type: 'number', width: 130 },
  { field: 'deaths', headerName: 'Deaths', type: 'number', width: 130 },
  { field: 'recovered', headerName: 'Recovered', type: 'number', width: 130 },
  { field: 'tests', headerName: 'Tests', type: 'number', width: 130 },
  { field: 'cases', headerName: 'Total Cases', type: 'number', width: 130 },

];

export default function DataTable({ data ,input }) {

  const search=data.filter(item=>item.country.includes(`${input}`))

  const rows = search.map(item => ({
    id: item.country,
    population: item.population,
    active: item.active,
    critical: item.critical,
    deaths: item.deaths,
    recovered: item.recovered,
    tests: item.tests,
    cases: item.cases

  }))


  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}