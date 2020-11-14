import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import './CreateActivityForm.css';

interface ICreateActivityForm {
}

const SOCIAL_GROUP_OPTIONS = ['within my social bubble', 'outside my social bubble'];
const DISTANCE_OPTIONS = ['Very close (< 1ft)', 'No physical distancing (< 3 ft)', 'Physical distancing (> 6 ft)', 'Far away (> 10 ft)'];
const MASK_TYPES = ['No mask', 'Cotton mask or face covering', 'Surgical mask', 'N95'];
const VOLUME_TYPES = ['Silence', 'Normal conversation', 'Loud talking, shouting, singing'];

export const CreateActivityForm: React.FC<ICreateActivityForm> = (): JSX.Element => {
  const [socialGroup, setSocialGroup] = useState<string>('');
  const [numPeople, setNumPeople] = useState(0);
  const [distance, setDistance] = useState<string>('');
  const [environment, setEnvironment] = useState<string>('');
  const [userMaskType, setUserMaskType] = useState<string>('');
  const [othersMaskType, setOthersMaskType] = useState<string>('');
  const [volume, setVolume] = useState<string>('');

  const submitActivity = (event: any) => {
    event.preventDefault();
    console.log(socialGroup, numPeople);
  }

  const handleSelectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    switch (event.target.name) {
      case "socialGroup":
        setSocialGroup(value);
        break;
      case "numPeople":
        setNumPeople(parseInt(value));
        break;
      case "distance":
        setDistance(value);
        break;
      case "environment":
        setEnvironment(value);
        break;
      case "userMaskType":
        setUserMaskType(value);
        break;
      case "othersMaskType":
        setOthersMaskType(value);
        break;
      case "volume":
        setVolume(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="CreateActivityForm">
      <h2>Log your activities to approximate your COVID-19 risk:</h2>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <h3>Nearby people</h3>
            <div className="activityFormTextField">
              <TextField
                select
                required
                fullWidth
                label="Contact Type"
                name="socialGroup"
                value={socialGroup}
                onChange={handleSelectChange}
                helperText="Who did you come into contact with?"
              >
                {SOCIAL_GROUP_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="activityFormTextField">
              <TextField
                required
                fullWidth
                // label="Number of people"
                value={numPeople}
                name="numPeople"
                onChange={handleSelectChange}
                type="number"
                helperText="How many people were within 15 ft?"
              />
            </div>
            <div className="activityFormTextField">
              <TextField
                select
                required
                fullWidth
                label="Distance"
                value={distance}
                name="distance"
                onChange={handleSelectChange}
                helperText="How close were others to you on average?"
              >
                {DISTANCE_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={6}>
            <h3>Activity details</h3>
            <div className="activityFormTextField">
              <TextField
                select
                required
                fullWidth
                label="Indoor or outdoor"
                name="environment"
                value={environment}
                onChange={handleSelectChange}
                helperText="Were you indoors or outdoors?"
              >
                {SOCIAL_GROUP_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="activityFormTextField">
              <TextField
                select
                required
                fullWidth
                label="Your mask"
                value={userMaskType}
                name="userMaskType"
                onChange={handleSelectChange}
                helperText="What kind of mask were you wearing?"
              >
                {MASK_TYPES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="activityFormTextField">
              <TextField
                select
                required
                fullWidth
                label="Others' masks"
                value={othersMaskType}
                name="othersMaskType"
                onChange={handleSelectChange}
                helperText="What kind of masks were most others wearing?"
              >
                {MASK_TYPES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
            <div className="activityFormTextField">
              <TextField
                select
                required
                fullWidth
                label="Volume"
                value={volume}
                name="volume"
                onChange={handleSelectChange}
                helperText="How much was everyone talking?"
              >
                {VOLUME_TYPES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" onSubmit={submitActivity}>
              Save Activity
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateActivityForm;