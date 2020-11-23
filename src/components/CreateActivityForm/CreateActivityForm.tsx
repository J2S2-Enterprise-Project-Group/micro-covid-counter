import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import './CreateActivityForm.css';

import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import { listActivitys } from '../../graphql/queries'
import { createActivity } from '../../graphql/mutations';
import * as APIInterface from '../../API';
import * as ActivityOptions from '../../helpers/Activity';

interface ICreateActivityForm {
  onChange: (risk: number) => void
}

export const CreateActivityForm: React.FC<ICreateActivityForm> = (props): JSX.Element => {
  const { onChange } = props;
  const [socialGroup, setSocialGroup] = useState<string>(ActivityOptions.SOCIAL_GROUP_OPTIONS[0]);
  const [numPeople, setNumPeople] = useState(0);
  const [distanceRiskLevel, setDistanceRiskLevel] = useState<string>(ActivityOptions.DISTANCE_LEVEL_OPTIONS[0]);
  const [environment, setEnvironment] = useState<string>(ActivityOptions.ENVIRONMENT_TYPES[0]);
  const [userMaskType, setUserMaskType] = useState<string>(ActivityOptions.MASK_TYPE_OPTIONS[0]);
  const [othersMaskType, setOthersMaskType] = useState<string>(ActivityOptions.MASK_TYPE_OPTIONS[0]);
  const [volume, setVolume] = useState<string>(ActivityOptions.VOLUME_TYPES[0]);
  const [selectedDate, setSelectedDate] = React.useState <Date | null>(new Date());
  const [risk, setRisk] = React.useState<number>(0.0);

  useEffect(() => {
    const risk: number = ActivityOptions.computeCovidRisk(mapInputToActivityModel());
    onChange(risk);
    setRisk(risk);
    // eslint-disable-next-line
  }, [socialGroup, numPeople, distanceRiskLevel, environment, userMaskType, othersMaskType, volume, selectedDate])

  // eslint-disable-next-line
  async function fetchActivities() {
    try {
      const allActivitiesResponse: GraphQLResult<APIInterface.ListActivitysQuery> = await API.graphql(graphqlOperation(listActivitys)) as GraphQLResult<APIInterface.ListActivitysQuery>
      const allActivities: any = allActivitiesResponse.data?.listActivitys?.items;
      console.log(allActivities);
    } catch (err) { console.log('error fetching activities: ', err) }
  }

  async function submitActivity(event: any) {
    event.preventDefault();

    try {
      // Map to correct types based on order in array (options ordered in increasing risk order)
      const activity: APIInterface.CreateActivityInput = mapInputToActivityModel();
      const activityResponse: GraphQLResult<APIInterface.CreateActivityMutation> = await API.graphql(graphqlOperation(createActivity, { input: activity })) as GraphQLResult<APIInterface.CreateActivityMutation>;
      const activityData: any = activityResponse.data?.createActivity
      console.log('Created activity:')
      console.log(activityData)
      clearInput();
    } catch (err) {
      console.log('error creating activities:', err)
    }
  }

  function mapInputToActivityModel() {
    const activity: APIInterface.CreateActivityInput = {
      inSocialBubble: Boolean(ActivityOptions.SOCIAL_GROUP_OPTIONS.indexOf(socialGroup)),
      numPeople: numPeople,
      distanceRiskLevel: ActivityOptions.DISTANCE_LEVEL_OPTIONS.indexOf(distanceRiskLevel),
      isIndoors: Boolean(ActivityOptions.ENVIRONMENT_TYPES.indexOf(environment)),
      userMaskRiskLevel: ActivityOptions.MASK_TYPE_OPTIONS.indexOf(userMaskType),
      othersMaskRiskLevel: ActivityOptions.MASK_TYPE_OPTIONS.indexOf(othersMaskType),
      volumeLevel: ActivityOptions.VOLUME_TYPES.indexOf(volume),
      date: selectedDate?.toISOString().split('T')[0] ?? new Date().toISOString().split('T')[0],
      risk: risk
    };

    return activity;
  }

  function clearInput() {
    setSocialGroup(ActivityOptions.SOCIAL_GROUP_OPTIONS[0]);
    setNumPeople(0);
    setDistanceRiskLevel(ActivityOptions.DISTANCE_LEVEL_OPTIONS[0]);
    setEnvironment(ActivityOptions.ENVIRONMENT_TYPES[0]);
    setUserMaskType(ActivityOptions.MASK_TYPE_OPTIONS[0]);
    setOthersMaskType(ActivityOptions.MASK_TYPE_OPTIONS[0]);
    setVolume(ActivityOptions.VOLUME_TYPES[0]);
    setSelectedDate(new Date());
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
      case "distanceRiskLevel":
        setDistanceRiskLevel(value);
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

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <div className="CreateActivityForm">
      <Typography variant="h4" gutterBottom>Log your activities to approximate your COVID-19 risk:</Typography>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>Nearby people</Typography>
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
                {ActivityOptions.SOCIAL_GROUP_OPTIONS.map((option) => (
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
                value={distanceRiskLevel}
                name="distanceRiskLevel"
                onChange={handleSelectChange}
                helperText="How close were others to you on average?"
              >
                {ActivityOptions.DISTANCE_LEVEL_OPTIONS.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>Activity details</Typography>
            <div>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  disableToolbar
                  fullWidth
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Date picker inline"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </MuiPickersUtilsProvider>
            </div>
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
                {ActivityOptions.ENVIRONMENT_TYPES.map((option) => (
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
                {ActivityOptions.MASK_TYPE_OPTIONS.map((option) => (
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
                {ActivityOptions.MASK_TYPE_OPTIONS.map((option) => (
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
                {ActivityOptions.VOLUME_TYPES.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" onClick={submitActivity}>
              Save Activity
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateActivityForm;