import React from 'react'

function Contact({contact}) {
    return (
        <>
            <tr>
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
