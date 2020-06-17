import React from 'react'

function NoteDeskItem({item, onToggle}) {
    return <li
     onClick={onToggle.bind(null, item)} 
     style={getStyles(item)} >{item.description}
     </li>;
}

export default NoteDeskItem

function getStyles(item) {
    return{
        backgroundColor: item.isDone ? 'green' : 'red',
    }
}