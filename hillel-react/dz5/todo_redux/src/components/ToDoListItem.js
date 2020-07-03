import React from 'react'
import {connect} from 'react-redux'

function ToDoListItem({item, onToggle, isDone}) {
    item.id = Date.now();    
    return <li onClick={
                onToggle.bind(null, item)} 
                style={getStyles(item)}
                >
                {item.title}
            </li>
}

function mapStateToProps(state) {
    return {
        
    }
};

export default connect(mapStateToProps) (ToDoListItem)

function getStyles(item) {
    return {
        backgroundColor: item.isDone ? 'green' : 'tomato',
    }
}
