import React from 'react'
import {connect} from 'react-redux'
import {addListItemValue} from '../store/actions'



function ToDoListItem({listItemValue, addListItemValue}) {
    
    return (
        <>
            <div>
                <li>{listItemValue}</li>
            </div>
        </>
        
    )
}

const mapStateToProps = ({ listItemValue }) => ({ listItemValue });

const mapDispatchToprops = {
    addListItemValue,
};

export default connect(mapStateToProps, mapDispatchToprops) (ToDoListItem)
