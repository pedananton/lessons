import React from 'react'

function NoteDeskItem({item, onToggle}) {
    return <li className='list_cell' draggable='true'
     onClick={
        dragAndDrop(item),
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

const dragAndDrop = (item) => {
    console.log('dragAndDrop', item)
    const dragStart = function () {
        console.log('dragStart', item)
          setTimeout(() => {
            //debugger
           // this.setState({})
        }, 500)
    }
    dragStart();
}