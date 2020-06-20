import React from 'react'

function NoteDeskItem({item, onToggle, dragAndDrop}) {
    return <li className='list_cell' draggable='true'
     onClick={
        onToggle.bind(null, item)
        }
     style={getStyles(item)} >{item.description}
     </li>;
}

export default NoteDeskItem

function getStyles(item) {
    return{
        backgroundColor: item.isDone ? 'green' : 'red',
    }
}

