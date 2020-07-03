import React from 'react'

function ToDoInput({ title, onTitleChange, onSave }) {
    function onSubmit(e) {
        e.preventDefault();
        onSave();
    }
    
    return (
        <form action="" onSubmit={onSubmit} >
            <input 
                placeholder={'input something todo'}
                type="text"
                value={title}
                onChange={onTitleChange}
            ></input>
        </form>
    )
}

export default ToDoInput;
