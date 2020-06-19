import React, {useState, useEffect} from 'react'
import NoteDeskItem from '../note-desk-item/NoteDeskItem';
import api from '../../api';


function NoteDesk() {
    const [noteDeskItems, setNoteDeskItems] = useState([]);
    
    useEffect(() => {
        api.get().then(({data}) => setNoteDeskItems(data));
    }, [])

    function toggleItem (item) {
        api.put(item.id, {...item, isDone: !item.isDone}).then(({data}) => 
        setNoteDeskItems(noteDeskItems.map(item => item.id === data.id ? data : item)));
    }

    const dragAndDropItem = (item) => {
        console.log('dragAndDropItem', item)
        const dragStart = function() {
            //item.className.add('hide')
            //console.log('dragStart', this) 
        }
    }
    dragAndDropItem();
    

    return (
        
         <ul className='list'>
          {noteDeskItems.map(item => (
            <NoteDeskItem key={item.id} item={item} onToggle={toggleItem} dragAndDrop={dragAndDropItem}/>
            ))}
         </ul>
        
    );
}

export default NoteDesk;
