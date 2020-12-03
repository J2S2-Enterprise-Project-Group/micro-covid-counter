import React, { useCallback, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { CssBaseline, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { listGroups } from '../../graphql/queries'
import { createGroup, deleteGroup, updateGroup } from '../../graphql/mutations';
import './CreateGroupForm.css'
import { useState } from 'react';
import API, { GraphQLResult, graphqlOperation } from '@aws-amplify/api';
import * as APIInterface from '../../API';

import { makeStyles } from '@material-ui/core/styles';

interface CreateGroupFormProps {
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const initialState = { name: '', description: '' }

export const CreateGroupForm: React.FC<CreateGroupFormProps> = (): JSX.Element => {
  const classes = useStyles();

  const [formState, setFormState] = useState(initialState)
  const [groups, setGroups] = useState([] as any)

  function setInput(key: string, value: string) {
    setFormState({ ...formState, [key]: value })
  }

  async function fetchTodos() {
    try {
      const groupData = await API.graphql(graphqlOperation(listGroups)) as GraphQLResult<APIInterface.ListGroupsQuery>
      if (groupData && groupData.data?.listGroups) {
        const groupList = groupData.data?.listGroups?.items
        console.log(groupList)
        setGroups(groupList)
      }
    } catch (err) { console.log('error fetching todos') }
  }

  const addTodo = useCallback(async () => {
    try {
      if (!formState.name || !formState.description) return
      const todo = { ...formState }
      setFormState(initialState)
      fetchTodos()
      await API.graphql(graphqlOperation(createGroup, { input: todo }))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }, [formState])

  const handleDeleteGroup = useCallback(async (itemId: string) => {
    try {
      await API.graphql(graphqlOperation(deleteGroup, { input: { id: itemId } }))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [])

  return (
    <div style={{ padding: 16, margin: 'auto', maxWidth: 700 }}>
      <CssBaseline />
      <div className="groupFormTextField">
        <TextField
          id="standard-basic"
          label="Group Name"
          onChange={event => setInput('name', event.target.value)} />

        <TextField
          id="filled-basic"
          label="Group Description"
          onChange={event => setInput('description', event.target.value)} />
      </div>
      <div className="groupFormTextField">
        <Button variant="contained" color="primary" onClick={addTodo}>
          Create Group
        </Button>
      </div>
      {groups.length > 0 && <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Group ID</TableCell>
              <TableCell align="right">Group Name</TableCell>
              <TableCell align="right">Group Description</TableCell>
              <TableCell align="right">Delete Group</TableCell>
              <TableCell align="right">Join Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {groups.map((group: any) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {group.id}
                </TableCell>
                <TableCell align="right"> {group.name}</TableCell>
                <TableCell align="right">{group.description}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="secondary" onClick={() => handleDeleteGroup(group.id)}>
                    Delete Group
                  </Button>
                </TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary">
                    Join Group
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>}
    </div >
  );
}

export default CreateGroupForm;