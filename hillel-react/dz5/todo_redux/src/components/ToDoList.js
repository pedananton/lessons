import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoForm from './ToDoForm'
import { toggleAction } from '../store/actions'

function ToDoList({ todos, title, toggleAction }) {

    function onTitleChange(e) {
        
        return (title = e.target.value)
    }

    function onSave() {
    
        console.log("saved-todo")
    }

    function toggleItem(item) {
        toggleAction(item)
    }

    return (
        <>
            <ul>
                {todos.map((item) => (
                    <ToDoListItem   key={item.id}
                                    item={item} 
                                    onToggle={toggleItem}
                                    onSave={onSave}/>
                ))}
            </ul>
            <ToDoForm title={title} onTitleChange={onTitleChange}></ToDoForm>
        </>
    )
}

function mapStateToProps(state) {
    return {
        todos: state.todos,  
    }
};

const mapDispatchToProps = {
    toggleAction,
}

export default connect( mapStateToProps, mapDispatchToProps ) (ToDoList)
