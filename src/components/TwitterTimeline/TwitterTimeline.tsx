import React from 'react';
import { Timeline } from 'react-twitter-widgets'

interface TwitterTimelineProps {
  screenName: string
}

export const TwitterTimeline: React.FC<TwitterTimelineProps> = (props): JSX.Element => {
  return (
    <div className="TwitterTimeline">
      <Timeline
        dataSource={{ sourceType: "profile", screenName: props.screenName }}
        options={{ height: "600" }}
      />
    </div>
  );
}

export default TwitterTimeline;