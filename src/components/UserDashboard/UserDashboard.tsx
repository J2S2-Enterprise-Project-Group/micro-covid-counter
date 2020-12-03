import React, { useEffect, useState } from 'react';
import ReactFrappeChart from 'react-frappe-charts';
import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import { listActivitys } from '../../graphql/queries'
import * as APIInterface from '../../API';

interface UserDashboardProps {
}

export const UserDashboard: React.FC<UserDashboardProps> = (): JSX.Element => {
  const [activities, setActivities] = useState<GraphQLResult<APIInterface.ListActivitysQuery>>();

  useEffect(() => {
    async function fetchActivities() {
      try {
        const allActivitiesResponse: GraphQLResult<APIInterface.ListActivitysQuery> = await API.graphql(graphqlOperation(listActivitys, { limit: 8 })) as GraphQLResult<APIInterface.ListActivitysQuery>
        setActivities(allActivitiesResponse)
      } catch (err) { console.log('error fetching activities: ', err) }
    }

    fetchActivities()
  }, [])

  function getChartLabels(n = 8) {
    let labels = [];
    for (let i = n - 1; i >= 0; i--) {
      const d = new Date();
      d.setDate(d.getDate() - i);
      labels.push(d.toISOString().split('T')[0]);
    }

    return labels;
  }

  function getPastNValues(n = 8) {
    let values: any[] = [];
    const items = activities?.data?.listActivitys?.items
    items?.forEach(item => {
      values.push(item?.risk.toFixed(6) ?? 0)
    });

    return values;
  }

  function getRandomValue(minimum: number, maximum: number) {
    return Math.random() * (maximum - minimum) + minimum;
  }

  function getNRandomValues(n: number) {
    let values = [];
    for (let i = 0; i < n; i++) {
      values.push(getRandomValue(0, 0.02).toFixed(6));
    }
    return values;
  }

  return (
    <div className="UserDashboard">
      <ReactFrappeChart
        type="line"
        colors={['purple', '#ffa3ef', 'light-blue']}
        axisOptions={{ xAxisMode: "tick", yAxisMode: "tick", xIsSeries: 1 }}
        height={400}
        data={{
          labels: getChartLabels(),
          datasets: [
            { name: 'Me', values: getPastNValues(8) },
            { name: 'Shiv', values: getNRandomValues(8) },
            { name: 'Jocelyn', values: getNRandomValues(8) },
            { name: 'Jagruti', values: getNRandomValues(8) },
          ],
        }}
      />
    </div>
  );
}

export default UserDashboard;