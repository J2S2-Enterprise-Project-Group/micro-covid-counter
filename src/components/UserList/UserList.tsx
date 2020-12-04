import React, { useEffect, useState } from 'react';
import { Auth, API } from 'aws-amplify';
import { CognitoUserInterface } from '@aws-amplify/ui-components';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

interface UserListProps {
}

export const UserList: React.FC<UserListProps> = (): JSX.Element => {
  const [admins, setAdmins] = useState<Array<CognitoUserInterface>>([]);
  const [users, setUsers] = useState<Array<CognitoUserInterface>>([]);

  useEffect(() => {
    let nextToken: string;

    async function getUsersFromGroup(groupName: String) {
      let apiName = 'AdminQueries';
      let path = '/listUsersInGroup';
      let myInit = {
        queryStringParameters: {
          "groupname": groupName,
          "token": nextToken
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `${(await Auth.currentSession()).getAccessToken().getJwtToken()}`
        }
      }
      const { NextToken, ...rest } = await API.get(apiName, path, myInit);
      nextToken = NextToken;
      console.log(rest.Users)

      if (groupName === "allcityadmin") {
        setAdmins(rest.Users);
      }
      if (groupName === "us-west-2_e2WKRUN95_Google") {
        setUsers(rest.Users);
      }

      return rest.Users;
    }

    getUsersFromGroup("allcityadmin");
    getUsersFromGroup("us-west-2_e2WKRUN95_Google");
  }, [])

  return (
    <div className="UserList">
      <List component="nav">
        {admins.map(admin => admin.Attributes[3] && admin.Attributes[4] ?
          <ListItem button>
            <ListItemIcon>
              <SupervisorAccountIcon />
            </ListItemIcon>
            <ListItemText primary={`${admin.Attributes[3]?.Value ?? ""} (${admin.Attributes[4]?.Value ?? ""})`} />
          </ListItem> : null
        )}
        {users.map(user => user.Attributes[3] && user.Attributes[4] ?
          <ListItem button>
            <ListItemIcon></ListItemIcon>
            <ListItemText primary={`${user.Attributes[3]?.Value ?? ""} (${user.Attributes[4]?.Value ?? ""})`} />
          </ListItem> : null
        )}
      </List>
    </div>
  );
}

export default UserList;