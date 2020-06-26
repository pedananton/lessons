import React from 'react'
import {connect} from 'react-redux' 
import { addNewListItem } from '../store/actions';

function ToDoInput({ newInputValue, addInputValue }) {
    //debugger
    return (
        <div >
            <input 
                placeholder={'input something todo'}
                type="text"
                value={newInputValue}
            ></input>
            <button onClick={() => addNewListItem({newInputValue})}>Add</button>
        </div>
    )
}

const mapStateToProps = ({ value }) => ({ value });


const mapDispatchToprops = {
    addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToprops)(ToDoInput);
