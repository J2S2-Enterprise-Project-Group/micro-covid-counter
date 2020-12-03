/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateActivityInput = {
  id?: string | null,
  inSocialBubble: boolean,
  numPeople: number,
  distanceRiskLevel: number,
  isIndoors: boolean,
  userMaskRiskLevel: number,
  othersMaskRiskLevel: number,
  volumeLevel: number,
  date: string,
  risk: number,
};

export type ModelActivityConditionInput = {
  inSocialBubble?: ModelBooleanInput | null,
  numPeople?: ModelIntInput | null,
  distanceRiskLevel?: ModelIntInput | null,
  isIndoors?: ModelBooleanInput | null,
  userMaskRiskLevel?: ModelIntInput | null,
  othersMaskRiskLevel?: ModelIntInput | null,
  volumeLevel?: ModelIntInput | null,
  date?: ModelStringInput | null,
  risk?: ModelFloatInput | null,
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

export type ModelStringInput = {
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

export type ModelFloatInput = {
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
  distanceRiskLevel?: number | null,
  isIndoors?: boolean | null,
  userMaskRiskLevel?: number | null,
  othersMaskRiskLevel?: number | null,
  volumeLevel?: number | null,
  date?: string | null,
  risk?: number | null,
};

export type DeleteActivityInput = {
  id?: string | null,
};

export type CreateGroupInput = {
  id?: string | null,
  name: string,
  description?: string | null,
};

export type ModelGroupConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  not?: ModelGroupConditionInput | null,
};

export type UpdateGroupInput = {
  id: string,
  name?: string | null,
  description?: string | null,
};

export type DeleteGroupInput = {
  id?: string | null,
};

export type ModelActivityFilterInput = {
  id?: ModelIDInput | null,
  inSocialBubble?: ModelBooleanInput | null,
  numPeople?: ModelIntInput | null,
  distanceRiskLevel?: ModelIntInput | null,
  isIndoors?: ModelBooleanInput | null,
  userMaskRiskLevel?: ModelIntInput | null,
  othersMaskRiskLevel?: ModelIntInput | null,
  volumeLevel?: ModelIntInput | null,
  date?: ModelStringInput | null,
  risk?: ModelFloatInput | null,
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

export type ModelGroupFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  not?: ModelGroupFilterInput | null,
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
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
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
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
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
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  input: CreateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type CreateGroupMutation = {
  createGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGroupMutationVariables = {
  input: UpdateGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type UpdateGroupMutation = {
  updateGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGroupMutationVariables = {
  input: DeleteGroupInput,
  condition?: ModelGroupConditionInput | null,
};

export type DeleteGroupMutation = {
  deleteGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
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
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
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
      distanceRiskLevel: number,
      isIndoors: boolean,
      userMaskRiskLevel: number,
      othersMaskRiskLevel: number,
      volumeLevel: number,
      date: string,
      risk: number,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      id: string,
      name: string,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  owner?: string | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  owner?: string | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  owner?: string | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity:  {
    __typename: "Activity",
    id: string,
    inSocialBubble: boolean,
    numPeople: number,
    distanceRiskLevel: number,
    isIndoors: boolean,
    userMaskRiskLevel: number,
    othersMaskRiskLevel: number,
    volumeLevel: number,
    date: string,
    risk: number,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup:  {
    __typename: "Group",
    id: string,
    name: string,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
