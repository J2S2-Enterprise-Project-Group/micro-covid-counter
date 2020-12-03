import React, { useEffect, useState } from 'react';
import 'date-fns';
import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import * as APIInterface from '../../API';
import {listActivitys} from '../../graphql/queries';
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
          <TableCell>Date</TableCell>
          <TableCell align="right">Distance Risk Level</TableCell>
          <TableCell align="right">In Social Bubble&nbsp;(Y/N)</TableCell>
          <TableCell align="right">Number of People&nbsp;(number)</TableCell>
          <TableCell align="right">User Mask Risl Level&nbsp;(%)</TableCell>
          <TableCell align="right">Other's Mask Risk Level&nbsp;(%)</TableCell>
          <TableCell align="right">Risk Level&nbsp;(%)</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {getPastNValues().map(activity => (
          <TableRow key={activity.id}>
            <TableCell component="th" scope="row">{activity.date}</TableCell>
            <TableCell align="right">{activity.distanceRiskLevel}</TableCell>
            <TableCell align="right">{activity.inSocialBubble}</TableCell>
            <TableCell align="right">{activity.userMaskRiskLevel}</TableCell>
            <TableCell align="right">{activity.othersMaskRiskLevel}</TableCell>
            <TableCell align="right">{activity.numPeople}</TableCell>
            <TableCell align="right">{activity.risk}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>

  );
}
export default ActivitySummary;