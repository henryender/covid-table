import { Box, TextField } from '@mui/material';
import * as React from 'react'
import './App.css';
import DataTable from './Table'

function App() {
  const [data, SetData] = React.useState([])
  const [input, setInput] = React.useState('')
  React.useEffect(() => {
    function Loader() {
      fetch('https://disease.sh/v3/covid-19/countries')
        .then(response => response.json())
        .then(response => SetData(response))
    }
    Loader();
  }, [])

  return (
    <>
    <div style={{width:'70%',marginLeft:'8.5%'}}>
    <TextField
        variant='standard'
        label='Search Country'
        placeholder='must begin with a capital letter- eg. Nigeria'
        sx={{ width: '100%', marginTop: '30px', }}
        onChange={(e) => setInput(e.target.value)} />
    </div>
      

      <Box sx={{ width: '83%', margin: 'auto', backgroundColor: 'lightgrey', marginTop: '30px' }}>
        <h3 style={{ backgroundColor: 'black', color: 'white', textAlign: 'center' ,width:'100%',}}>
          WORLD COVID CASES-2019/2020 REPORT
        </h3>
        <DataTable data={data} input={input} />
      </Box>
    </>

  );
}

export default App;
