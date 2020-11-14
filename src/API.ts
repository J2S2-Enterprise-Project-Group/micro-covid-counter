/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActivityInput = {
  id?: string | null,
  inSocialBubble: boolean,
  numPeople: number,
  distanceSafetyLevel: number,
  isIndoors: boolean,
  userMaskSafetyLevel: number,
  othersMaskSafetyLevel: number,
  volumeLevel: number,
};

export type ModelActivityConditionInput = {
  inSocialBubble?: ModelBooleanInput | null,
  numPeople?: ModelIntInput | null,
  distanceSafetyLevel?: ModelIntInput | null,
  isIndoors?: ModelBooleanInput | null,
  userMaskSafetyLevel?: ModelIntInput | null,
  othersMaskSafetyLevel?: ModelIntInput | null,
  volumeLevel?: ModelIntInput | null,
  and?: Array< ModelActivityConditionInput | null > | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  not?: ModelActivityConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateActivityInput = {
  id: string,
  inSocialBubble?: boolean | null,
  numPeople?: number | null,
  distanceSafetyLevel?: number | null,
  isIndoors?: boolean | null,
  userMaskSafetyLevel?: number | null,
  othersMaskSafetyLevel?: number | null,
  volumeLevel?: number | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  inSocialBubble?: ModelBooleanInput | null,
  numPeople?: ModelIntInput | null,
  distanceSafetyLevel?: ModelIntInput | null,
  isIndoors?: ModelBooleanInput | null,
  userMaskSafetyLevel?: ModelIntInput | null,
  othersMaskSafetyLevel?: ModelIntInput | null,
  volumeLevel?: ModelIntInput | null,
  and?: Array< ModelActivityFilterInput | null > | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  not?: ModelActivityFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type CreateActivityMutationVariables = {
  input: CreateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type CreateActivityMutation = {
  createActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateActivityMutationVariables = {
  input: UpdateActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type UpdateActivityMutation = {
  updateActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteActivityMutationVariables = {
  input: DeleteActivityInput,
  condition?: ModelActivityConditionInput | null,
};

export type DeleteActivityMutation = {
  deleteActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListActivitysQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitysQuery = {
  listActivitys:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      id: string,
      inSocialBubble: boolean,
      numPeople: number,
      distanceSafetyLevel: number,
      isIndoors: boolean,
      userMaskSafetyLevel: number,
      othersMaskSafetyLevel: number,
      volumeLevel: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceSafetyLevel: number,
    isIndoors: boolean,
    userMaskSafetyLevel: number,
    othersMaskSafetyLevel: number,
    volumeLevel: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
