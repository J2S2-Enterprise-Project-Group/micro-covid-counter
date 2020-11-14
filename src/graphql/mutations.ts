/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createActivity = /* GraphQL */ `
  mutation CreateActivity(
    $input: CreateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    createActivity(input: $input, condition: $condition) {
      id
      inSocialBubble
      numPeople
      distanceSafetyLevel
      isIndoors
      userMaskSafetyLevel
      othersMaskSafetyLevel
      volumeLevel
      createdAt
      updatedAt
    }
  }
`;
export const updateActivity = /* GraphQL */ `
  mutation UpdateActivity(
    $input: UpdateActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    updateActivity(input: $input, condition: $condition) {
      id
      inSocialBubble
      numPeople
      distanceSafetyLevel
      isIndoors
      userMaskSafetyLevel
      othersMaskSafetyLevel
      volumeLevel
      createdAt
      updatedAt
    }
  }
`;
export const deleteActivity = /* GraphQL */ `
  mutation DeleteActivity(
    $input: DeleteActivityInput!
    $condition: ModelActivityConditionInput
  ) {
    deleteActivity(input: $input, condition: $condition) {
      id
      inSocialBubble
      numPeople
      distanceSafetyLevel
      isIndoors
      userMaskSafetyLevel
      othersMaskSafetyLevel
      volumeLevel
      createdAt
      updatedAt
    }
  }
`;
