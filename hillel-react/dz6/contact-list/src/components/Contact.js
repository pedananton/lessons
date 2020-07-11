import React from 'react'

function Contact({contact, onToggle, onContactDelete}) {
    return (
        <>
            <tr 
                onClick={() => onToggle(contact.id, console.log('onToggle', contact))}
                style={{backgroundColor: contact.isToggle ? 'grey' : 'none'}}
                    >
                <td>
                    {contact.name}
                </td>
                <td>
                    {contact.surname}
                </td>
                <td>
                    {contact.phone}
                </td>
                <td>
                    <button 
                        style={buttonStyles}
                        onClick={e => e.stopPropagation() || onContactDelete(contact.id)}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        </>
    )
}

const buttonStyles = {
    float: 'right'
};

export default Contact
