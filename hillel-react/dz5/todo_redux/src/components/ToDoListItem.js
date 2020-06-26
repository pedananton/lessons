import React from 'react'
import {connect} from 'react-redux'
import {addNewListItem} from '../store/actions'



function ToDoListItem({inputValue}) {
    
    return (
        <>
            <div>
                <li>{inputValue}</li>
            </div>
        </>
        
    )
}

const mapStateToProps = ({ inputValue }) => ({ inputValue });

const mapDispatchToprops = {
    addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToprops) (ToDoListItem)
