import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoInput from './ToDoInput'

function ToDoList({listItemValue}) {
    const todos = [];
    //debugger
    /**
     * нужно отрендерить новую todo в list
     */
    return (
        <>
            <div>
                <ul>
                    {todos.map((listItemValue) => (
                        <ToDoListItem listItemValue={listItemValue}/>
                    ))}
                </ul>
            </div>
            <ToDoInput></ToDoInput>
        </>
    )
}

export default connect() (ToDoList)
