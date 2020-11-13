import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

interface ICreateActivityForm {
}

const locations = [
  {
    state: 'California',
    counties: ['Santa Clara', 'Alameda'],
  },
  {
    state: 'Arizona',
    counties: ['Apache'],
  }
];

export const CreateActivityForm: React.FC<ICreateActivityForm> = (): JSX.Element => {
  const [formState, setFormState] = useState({ state: '', county: '' })
  const [state, setState] = useState<string>('');
  const [county, setCounty] = useState<string>('');

  async function submitActivity(event: any) {
    event.preventDefault();
    try {
      const activity: any = { ...formState }
      console.log(activity)
    } catch (err) {
      console.log('error creating activities:', err)
    }
  }

  function setInput(key: string, value: any) {
    setFormState({ ...formState, [key]: value })
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.name === "state") {
      setState(event.target.value);
      setCounty('');
    } else if (event.target.name === "county") {
      setCounty(event.target.value);
    }
  };

  return (
    <div className="CreateActivityForm">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <form noValidate autoComplete="off">
            <div>
              <TextField
                id="select-state"
                select
                label="Select state"
                name="state"
                value={state}
                onChange={handleSelectChange}
                helperText="Please select your state"
                variant="outlined"
              >
                {locations.map((option) => (
                  <MenuItem key={option.state} value={option.state}>
                    {option.state}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div>
              <TextField
                id="select-county"
                select
                label="Select county"
                name="county"
                value={county}
                onChange={handleSelectChange}
                helperText="Please select your county"
                variant="outlined"
              >
                {locations.map((location) => (
                  location.state === state && location.counties.map(county => (
                    <MenuItem key={county} value={county}>
                      {county}
                    </MenuItem>
                  ))
                ))}
              </TextField>
            </div>
          </form>
        </Grid>
        <Grid item xs={6}>
          <div></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default CreateActivityForm;