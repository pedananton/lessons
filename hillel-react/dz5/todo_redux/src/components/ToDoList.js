import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoInput from './ToDoInput'

function ToDoList({ todos, title, toggleAction }) {

    function onTitleChange(e) {
        
        return (title = e.target.value)
    }

    function onSave() {
    
        console.log("saved-todo")
    }

    return (
        <>
            <ul>
                {todos.map((item) => (
                    <ToDoListItem   key={item.id}
                                    item={item} 
                                    toggleItem={toggleAction}
                                    onSave={onSave}/>
                ))}
            </ul>
            <ToDoInput title={title} onTitleChange={onTitleChange}></ToDoInput>
        </>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,
        //log: console.log('mapStateToProps-state', state), 
    }
};

export default connect( mapStateToProps ) (ToDoList)
