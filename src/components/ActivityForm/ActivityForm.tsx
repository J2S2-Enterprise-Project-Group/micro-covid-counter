import React, { useEffect, useState } from 'react';
import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import { listActivitys } from '../../graphql/queries'
import { createActivity } from '../../graphql/mutations'
import * as APIInterface from '../../API';

interface IActivityForm {
}

export const ActivityForm: React.FC<IActivityForm> = (): JSX.Element => {
  const [formState, setFormState] = useState({ id: '', type: '' })
  const [activities, setActivities] = useState<Array<{
    id: string,
    type: string,
    createdAt: string,
    updatedAt: string,
  }>>([])

  useEffect(() => {
    fetchActivities()
  }, [])

  async function fetchActivities() {
    try {
      const allActivitiesResponse: GraphQLResult<APIInterface.ListActivitysQuery> = await API.graphql(graphqlOperation(listActivitys)) as GraphQLResult<APIInterface.ListActivitysQuery>
      const allActivities: any = allActivitiesResponse.data?.listActivitys?.items
      setActivities(allActivities)
    } catch (err) { console.log('error fetching activities') }
  }

  async function addActivity(event: any) {
    event.preventDefault();
    try {
      const activity: APIInterface.CreateActivityInput = { ...formState }
      const activityResponse: GraphQLResult<APIInterface.CreateActivityMutation> = await API.graphql(graphqlOperation(createActivity, { input: activity })) as GraphQLResult<APIInterface.CreateActivityMutation>
      const activityData: any = activityResponse.data?.createActivity
      setActivities([...activities, activityData])
    } catch (err) {
      console.log('error creating activities:', err)
    }
  }

  function setInput(key:string, value:any) {
    setFormState({ ...formState, [key]: value })
  }

  return (
    <div className="ActivityForm">
      <form>
        <input
          onChange={event => setInput('id', event.target.value)}
          value={formState.id}
          placeholder="id"
        />
        <input
          onChange={event => setInput('type', event.target.value)}
          value={formState.type}
          placeholder="type"
        />
        <button onClick={addActivity}>Add Activity</button>
      </form>
      {
        activities.map((activity, index) => (
          <div key={index}>
            <p>{activity.id}</p>
            <p>{activity.type}</p>
          </div>
        ))
      }
    </div>
  );
}

export default ActivityForm;
