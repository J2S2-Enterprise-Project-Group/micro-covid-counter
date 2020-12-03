import React, { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
// import './CreateActivityForm.css';
import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import * as APIInterface from '../../API';
import {listActivitys} from '../../graphql/queries';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


interface ActivitySummary {
}

export const ActivitySummary: React.FC<ActivitySummary> = (props): JSX.Element => {
  const [activities, setActivities] = useState<GraphQLResult<APIInterface.ListActivitysQuery>>();

  useEffect(() => {
    async function fetchActivities() {
      try {
        const allActivitiesResponse: GraphQLResult<APIInterface.ListActivitysQuery> = await API.graphql(graphqlOperation(listActivitys)) as GraphQLResult<APIInterface.ListActivitysQuery>
        const allActivities: any = allActivitiesResponse.data?.listActivitys?.items;
        console.log('Activities',allActivities);
        setActivities(allActivitiesResponse)
      } catch (err) { console.log('error fetching activities: ', err) }
    }
    fetchActivities()
  }, [])

  function getPastNValues() {
    console.log(activities)
    let values: any[] = [];
    const items = activities?.data?.listActivitys?.items
    items?.forEach(item => {
      console.log(item)
      values.push(item)
    });

    return values;
  }

  return (
  <TableContainer component={Paper}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Dessert (100g serving)</TableCell>
          <TableCell align="right">Date</TableCell>
          <TableCell align="right">Fat&nbsp;(g)</TableCell>
          <TableCell align="right">Carbs&nbsp;(g)</TableCell>
          <TableCell align="right">Protein&nbsp;(g)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getPastNValues().map(activity => (
          <TableRow key={activity.id}>
            <TableCell component="th" scope="row">
              {activity.id}
            </TableCell>
            {/* <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
            <TableCell align="right">{row.protein}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  );
}
export default ActivitySummary;