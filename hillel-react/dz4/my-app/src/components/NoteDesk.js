import React, {useState, useEffect} from 'react'
import NoteDeskItem from './note-desk-item/NoteDeskItem';
import api from '../api';


function NoteDesk() {
    const [noteDeskItems, setNoteDeskItems] = useState([]);
    
    useEffect(() => {
        api.get().then(({data}) => setNoteDeskItems(data));
    }, [])

    return (
        
         <ul>Hello NoteDesk
          {noteDeskItems.map(item => (
            <NoteDeskItem key={item.id} item={item} />
            ))}
         </ul>
        
    );
}

export default NoteDesk;
