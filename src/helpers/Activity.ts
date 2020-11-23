import * as APIInterface from '../API';

// Cofficient Source: https://www.microcovid.org/paper/14-research-sources

// Store inSocialBubble as bool from position: true = 'within my social bubble', false = 'outside my social bubble'
export const SOCIAL_GROUP_OPTIONS = ['outside my social bubble', 'within my social bubble'];
const SOCIAL_GROUP_COEFFICIENTS = [1.0, 0.34]; 

// Store distanceRiskLevel where
//  0 = 'Far away (> 10 ft)'
//  1 = 'Physical distancing (> 6 ft)'
//  2 = 'No physical distancing (< 3 ft)'
//  3 = 'Very close (< 1ft)'
export const DISTANCE_LEVEL_OPTIONS = ['Far away (> 10 ft)', 'Physical distancing (> 6 ft)', 'No physical distancing (< 3 ft)', 'Very close (< 1ft)'];
const DISTANCE_LEVEL_COEFFICIENTS = [0.125, 0.25, 1.0, 1.5];

// Store maskTypeRiskLevel where
//  0 = 'N95'
//  1 = 'Surgical mask'
//  2 = 'Cotton mask or face covering'
//  3 = 'No mask'
export const MASK_TYPE_OPTIONS = ['N95', 'Surgical mask', 'Cotton mask or face covering', 'No mask'];
const MASK_TYPE_COEFFICIENTS = [0.1, 0.5, 0.25, 1.0];

// Store volumeLevel where
//  0 = 'Silence'
//  1 = 'Normal conversation'
//  2 = 'Loud talking, shouting, singing'
export const VOLUME_TYPES = ['Silence', 'Normal conversation', 'Loud talking, shouting, singing'];
const VOLUME_COEFFICIENTS = [0.25, 1.0, 1.25];

// Store isIndoors as bool from position: true = 'Indoors', false = 'Outdoors
export const ENVIRONMENT_TYPES = ['Outdoors', 'Indoors']; 
const ENVIRONMENT_TYPES_COEFFICIENTS = [0.05, 1.0];

// Computed from https://www.microcovid.org/paper/5-activity-risk
export function computeCovidRisk(activity: APIInterface.CreateActivityInput) {
  // Activity Risk of talking to 1 person who has COVID, for 1 hour, indoors, unmasked, at 3 feet = 6%
  const baselineRisk = 0.06;

  // Modify baseline from this particular activity
  const { 
    distanceRiskLevel,
    inSocialBubble,
    isIndoors,
    numPeople,
    othersMaskRiskLevel,
    userMaskRiskLevel,
    volumeLevel
  } = activity;

  // User mask modifier
  const distanceRiskCoefficient = DISTANCE_LEVEL_COEFFICIENTS[distanceRiskLevel];
  const inSocialBubbleCoefficient = SOCIAL_GROUP_COEFFICIENTS[inSocialBubble ? 1 : 0];
  const isIndoorsCoefficient = ENVIRONMENT_TYPES_COEFFICIENTS[isIndoors ? 1 : 0];
  const numPeopleCoefficient = 0.1;
  const othersMaskRiskLevelCoefficient = MASK_TYPE_COEFFICIENTS[userMaskRiskLevel];
  const userMaskRiskLevelCoefficient = MASK_TYPE_COEFFICIENTS[othersMaskRiskLevel];
  const volumeLevelCoefficient = VOLUME_COEFFICIENTS[volumeLevel];

  const activityRisk = baselineRisk * distanceRiskCoefficient * inSocialBubbleCoefficient * isIndoorsCoefficient * othersMaskRiskLevelCoefficient * (numPeopleCoefficient * numPeople) * userMaskRiskLevelCoefficient * volumeLevelCoefficient;
  return activityRisk;
}