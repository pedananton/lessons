import React from 'react'

import { TableCell, TableRow } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function ListItem({user}) {
    const history = useHistory();

    function onRowClick() {
        console.log('history', history)
        history.push('/users/' + user.id);
    }
    return (
            <TableRow onClick={onRowClick} >
                <TableCell component="th" scope="row">
                    {user.name}
                </TableCell>
                <TableCell align="right">{user.username}</TableCell>
                <TableCell align="right">{user.email}</TableCell>
                <TableCell align="right">{user.phone}</TableCell>
                <TableCell align="right">{user.id}</TableCell>
            </TableRow>
    )
}


