import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoInput from './ToDoInput'

function ToDoList() {
    
    return (
        <>
            <div>
                <ul>
                    <ToDoListItem
                        
                    ></ToDoListItem>
                </ul>
            </div>
            <ToDoInput></ToDoInput>
        </>
    )
}

export default connect() (ToDoList)
