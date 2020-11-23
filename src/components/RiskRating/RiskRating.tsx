import React, { useEffect, useState } from 'react';
import Rating, { IconContainerProps } from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

interface RiskRatingProps {
  risk: number
}

export const RiskRating: React.FC<RiskRatingProps> = (props): JSX.Element => {
  const [ratingValue, setRatingValue] = useState(5);

  const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
    5: {
      icon: <SentimentVeryDissatisfiedIcon style={{ color: ratingValue === 5 ? 'firebrick' : 'grey' }} />,
      label: 'Extremely risky',
    },
    4: {
      icon: <SentimentDissatisfiedIcon style={{ color: ratingValue === 4 ? 'orangered' : 'grey' }} />,
      label: 'Very risky',
    },
    3: {
      icon: <SentimentSatisfiedIcon style={{ color: ratingValue === 3 ? 'orange' : 'grey' }} />,
      label: 'More risky',
    },
    2: {
      icon: <SentimentSatisfiedAltIcon style={{ color: ratingValue === 2 ? 'gold' : 'grey' }} />,
      label: 'Slightly risky',
    },
    1: {
      icon: <SentimentVerySatisfiedIcon style={{ color: ratingValue === 1 ? 'green' : 'grey' }} />,
      label: 'Low risk',
    },
  };

  function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
  }

  useEffect(() => {
    if (props.risk >= 0.01) {
      setRatingValue(5);
    } else if (props.risk >= 0.005) {
      setRatingValue(4);
    } else if (props.risk >= 0.001) {
      setRatingValue(3);
    } else if (props.risk >= 0.0005) {
      setRatingValue(2);
    } else {
      setRatingValue(1);
    }
  }, [props.risk])

  return (
    <div className="RiskRating">
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography variant="h4" align="center" gutterBottom>Your risk level if someone has Covid-19:</Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center">
            <Grid item>
              <Rating
                name="customized-icons"
                defaultValue={1}
                value={ratingValue}
                size="large"
                readOnly
                getLabelText={(value: number) => customIcons[value].label}
                IconContainerComponent={IconContainer}
              />
            </Grid>
        </Grid>
        <Typography variant="h6" align="center">{(props.risk * 100).toFixed(2)}% risk</Typography>
        <Typography variant="h5" align="center">{customIcons[ratingValue].label}</Typography>
      </Box>
    </div>
  );
}

export default RiskRating;