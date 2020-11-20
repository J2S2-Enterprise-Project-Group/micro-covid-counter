/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateActivity = /* GraphQL */ `
  subscription OnCreateActivity($owner: String) {
    onCreateActivity(owner: $owner) {
      id
      inSocialBubble
      numPeople
      distanceRiskLevel
      isIndoors
      userMaskRiskLevel
      othersMaskRiskLevel
      volumeLevel
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateActivity = /* GraphQL */ `
  subscription OnUpdateActivity($owner: String) {
    onUpdateActivity(owner: $owner) {
      id
      inSocialBubble
      numPeople
      distanceRiskLevel
      isIndoors
      userMaskRiskLevel
      othersMaskRiskLevel
      volumeLevel
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteActivity = /* GraphQL */ `
  subscription OnDeleteActivity($owner: String) {
    onDeleteActivity(owner: $owner) {
      id
      inSocialBubble
      numPeople
      distanceRiskLevel
      isIndoors
      userMaskRiskLevel
      othersMaskRiskLevel
      volumeLevel
      createdAt
      updatedAt
      owner
    }
  }
`;
