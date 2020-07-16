import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from '@material-ui/core'
import React from 'react'
import {connect} from 'react-redux'
import ListItem from './ListItem'

function List({users}) {
    return (
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         {users.map((user) => (
           <ListItem user={user} key={user.id} />
         ))}
        </TableBody>
      </Table>
    </TableContainer>
    )
}

const mapStateToProps = ({users: {items}}) => ({
  users: items,
})

export default connect(mapStateToProps)(List)
