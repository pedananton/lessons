import React from 'react'
import {connect} from 'react-redux'
import ToDoListItem from './ToDoListItem'
import ToDoInput from './ToDoInput'
import {addNewListItem} from '../store/actions'

function ToDoList({ itemValue }) {
    const item = {itemValue};
    item.id = Date.now();
    
    const todos = [];
    debugger
    /**
     * не рендерится item в list :(
     */
    return (
        <>
            <div>
                <ul>
                    {todos.map((item) => (
                        <ToDoListItem item={item}/>
                    ))}
                </ul>
            </div>
            <ToDoInput></ToDoInput>
        </>
    )
}

const mapStateToProps = ({ itemValue }) => ({ itemValue });

const mapDispatchToprops = {
    addNewListItem,
};


export default connect(mapStateToProps, mapDispatchToprops) (ToDoList)
