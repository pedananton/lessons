import Paper from '@material-ui/core/Paper'
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import List from './List'
import {getUsers} from '../../store/actions/users'

function Users({getUsers}) {
    useEffect(() =>{
        getUsers()
    }, [getUsers])

    return (
        <Paper>
            <List/>
        </Paper>
    )
}

const mapDispatchToProps = {
    getUsers,
}

export default connect(null, mapDispatchToProps)(Users)
