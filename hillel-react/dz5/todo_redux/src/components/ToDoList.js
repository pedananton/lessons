import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoInput from './ToDoInput'
import {addNewListItem} from '../store/actions'

function ToDoList({ todos }) {
    function toggleItem(item) {
        debugger
        return ((item.id, {isDone: !item.isDone })
/**
 * сделать изменение isDone 
 */
        ,console.log ('toggle',item )
        )
    };
    
    //debugger
    return (
        <>
            <div>
                <ul>
                    {todos.map((item) => (
                        <ToDoListItem key={item.id} item={item} onToggle={toggleItem}/>
                    ))}
                </ul>
            </div>
            <ToDoInput></ToDoInput>
        </>
    )
}

function mapStateToProps(state) {
    //debugger
    return {
        todos: state.todos,
        //log: console.log('mapStateToProps-state', state), 
    }
};

const mapDispatchToprops = {
    addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToprops) (ToDoList)
