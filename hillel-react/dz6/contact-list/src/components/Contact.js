import React from 'react'

function Contact({contact}) {
    return (
        <>
            <td>
                {contact.name}
            </td>
            <td>
                {contact.surname}
            </td>
            <td>
                {contact.phone}
            </td>
        </>
    )
}

export default Contact
