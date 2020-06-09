import React, { Component } from 'react';

export default class ContactsListItem extends Component {
    onElementClick = () => {
        
        this.props.onToggle(this.props.contact)   
    }

    render() {
        const { contact } = this.props;
        return (
            <tr onClick={this.onElementClick}>
                <td>{contact.name}</td>
                <td>{contact.surname}</td>
                <td>
                    <button
                     onClick={
                        this.props.onDelete.bind(null, contact.id)
                     }
                    >
                        Delete
                    </button>
                </td>
            </tr>
        );
    }
}

