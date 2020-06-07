import React, { Component } from 'react'
import './ContactsList.css';
import ContactsListItem from '../ContactsListItem/ContactsListItem';
import ContactsListForm from '../ContactsListForm/ContactsListForm';

export default class ContactsList extends Component {
    state = {
        
        contacts: [
            {
                id: 1,
                age: 33,
                name: 'Leanne',
                surname: 'Graham',
                phone: '1-770-736-8031 x56442',
            },
            {
                id: 2,
                age: 33,
                name: 'Ervin',
                surname: 'Howell',
                phone: '010-692-6593 x09125',
            },
            {
                id: 3,
                age: 33,
                name: 'Clementine',
                surname: 'Bauch',
                phone: '1-463-123-4447',
            },
            {
                id: 4,
                age: 33,
                name: 'Patricia',
                surname: 'Lebsack',
                phone: '493-170-9623 x156',
            },
            {
                id: 5,
                age: 33,
                name: 'Chelsey',
                surname: 'Dietrich',
                phone: '(254)954-1289',
            },
        ],

    }; 

    onDelete = (e) => {
        e.preventDefault();
    }

    onDelete = (contactId) => {
        this.setState({
            
            contacts: this.state.contacts.filter(({ id }) => id !== contactId),
        });
        
    };

    showForm = () => {
        this.setState({
            isFormVisible: true,
            
        });
        
    };

    hideForm = () => {
        this.setState({
            isFormVisible: false,
        });
    };

    onFormSave = (contact) => {
        contact.id = Date.now();

        this.setState({
            contacts: [...this.state.contacts, contact],
        });

        this.hideForm();
    };

    onToggle = (id) => {
        //debugger

        this.setState({
            
        })
        console.log("toggle-List", id)
        this.showForm();
        
    }

    render() {
        return (
            <>
             <table className="split left">
              <thead>
               <tr>
                <th>Name</th>
                <th>Surname</th>
               </tr>
              </thead>
              <tbody>
              {this.state.contacts.map((contact) => (
                 <ContactsListItem
                    contact={contact}
                    key={contact.id}
                    onDelete={this.onDelete}
                    onToggle={this.onToggle}
                    onClick={this.onFormSave}
                
                 ></ContactsListItem>
              ))}
              
              </tbody>
             </table>

             <table className="split right">
              <thead>
               <tr>
                <th>Form</th>
               </tr>
              </thead>
              <tbody>
               {this.state.isFormVisible ? (
                <ContactsListForm
                 onSave={this.hideForm , this.onFormSave}
                 onToggle={this.onToggle}
                ></ContactsListForm>
               ) : (
                <tr>
               <td>
                <center>
                 <button 
                  style={{color: "green"}}
                  onClick={
                    this.showForm
                  }
                  >New Contact</button>
                </center>
               </td>
              </tr>
               )}
              </tbody>
             </table>
            </>
            
        )
    }
}
