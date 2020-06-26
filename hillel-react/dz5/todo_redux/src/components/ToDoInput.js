import React from 'react'
import {connect} from 'react-redux' 
import { addNewListItem } from '../store/actions';

function ToDoInput({ inputValue }) {
    function onChange(e) {
        
        inputValue = e.target.value;
    }
    return (
        <div >
            <input 
                placeholder={'input something todo'}
                type="text"
                onChange={onChange}
            ></input>
            <button onClick={
                
                () => addNewListItem({inputValue})}>Add</button>
        </div>
    )
}

const mapStateToProps = ({ inputValue }) => ({ inputValue });

const mapDispatchToprops = {
    addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToprops)(ToDoInput);
