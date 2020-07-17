import Paper from '@material-ui/core/Paper'
import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import List from './List'
import {getUsers} from '../../store/actions/users'
import { Switch, Route } from 'react-router-dom'
import Form from './Form'

function Users({getUsers}) {
    useEffect(() =>{
        getUsers()
    }, [getUsers])

    return (
        <Paper>
            <Switch>
                <Route path='/users/' exact>
                    <List/>
                </Route>
                <Route path='/users/:id'>
                    <Form/>
                </Route>
            </Switch>
        </Paper>
    )
}

const mapDispatchToProps = {
    getUsers,
}

export default connect(null, mapDispatchToProps)(Users)
