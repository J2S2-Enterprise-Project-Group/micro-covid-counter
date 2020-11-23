import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import CreateActivityForm from '../CreateActivityForm/CreateActivityForm';
import RiskRating from '../RiskRating/RiskRating';
import * as APIInterface from '../../API';
import { computeCovidRisk } from '../../helpers/Activity';

interface ActivityLoggerProps {
}

export const ActivityLogger: React.FC<ActivityLoggerProps> = (): JSX.Element => {
  const [risk, setRisk] = useState(0.0);

  function activityFormChanged(activityData: APIInterface.CreateActivityInput) {
    const risk = computeCovidRisk(activityData);
    setRisk(risk)
  }

  return (
    <div className="ActivityLogger">
      <form>
        <Grid container spacing={3}>
          <Grid item xs={7}>
            <CreateActivityForm onChange={activityFormChanged} />
          </Grid>
          <Grid item xs={5} 
            container
            direction="row"
            justify="center"
            alignItems="center">
            <RiskRating risk={risk} />
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default ActivityLogger;