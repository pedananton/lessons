import React from 'react'

function Contact({contact, onToggle}) {
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
            </tr>
        </>
    )
}

export default Contact
