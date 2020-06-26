import React from 'react'
import {connect} from 'react-redux'
import ToDoList from './ToDoList'

function ToDo() {
    return  <>
                <header>ToDo App</header>
                <ToDoList></ToDoList>
            </>
             
}

export default connect()(ToDo)
