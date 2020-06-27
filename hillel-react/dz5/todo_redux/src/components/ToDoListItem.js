import React from 'react'
import {connect} from 'react-redux'
import {addNewListItem} from '../store/actions'



function ToDoListItem() {
    
    //debugger
    return (
        <li></li>
    )
}

const mapStateToProps = ({ itemValue }) => ({ itemValue });

const mapDispatchToprops = {
    addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToprops) (ToDoListItem)
