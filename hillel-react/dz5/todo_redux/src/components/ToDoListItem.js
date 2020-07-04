import React from 'react'
import {connect} from 'react-redux'


function ToDoListItem({item, onToggle}) {
    item.id = Date.now();    
    
    return <li onClick={
                onToggle.bind(null, item)} 
                style={getStyles(item)}
                >
                {item.title}
            </li>
}

export default connect() (ToDoListItem)

function getStyles(item) {
    return {
        backgroundColor: item.isDone ? 'green' : 'tomato',
    }
}
