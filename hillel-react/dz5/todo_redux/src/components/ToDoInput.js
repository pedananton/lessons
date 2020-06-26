import React from 'react'
import {connect} from 'react-redux' 
import { addInputValue } from '../store/actions';

function ToDoInput({ inputValue, addInputValue }) {
    return (
        <div >
            <input 
                placeholder={'input something todo'}
                type="text"
                value={inputValue}
            ></input>
            <button onClick={() => addInputValue({inputValue })}>Add</button>
        </div>
    )
}

const mapStateToProps = ({ inputValue }) => ({ inputValue });

const mapDispatchToprops = {
    addInputValue,
};

export default connect(mapStateToProps, mapDispatchToprops)(ToDoInput);
