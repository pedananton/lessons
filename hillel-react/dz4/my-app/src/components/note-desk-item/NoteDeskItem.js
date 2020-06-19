import React, {useState} from 'react'

function NoteDeskItem({item, onToggle, dragAndDrop}) {
    const [itemState, setitemState] = useState([])

    return <li className='list_cell' draggable='true'
     onClick={
        onToggle.bind(null, item),
        dragAndDrop.bind(null, item)
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

