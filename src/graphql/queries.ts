/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getActivity = /* GraphQL */ `
  query GetActivity($id: ID!) {
    getActivity(id: $id) {
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
export const listActivitys = /* GraphQL */ `
  query ListActivitys(
    $filter: ModelActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActivitys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
