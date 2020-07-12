import React from 'react'
import {connect} from 'react-redux'
import Contact from './Contact'
import Modal from './Modal'
import { openModal, deleteContact } from '../store/actions/index'

function ContactList({ onContactDelete, modalVisible, openModal, contacts }) {
    return (
        <>
            <button onClick={() => openModal()}>Add New</button>
            {modalVisible ? <Modal /> : null}
            <table>
                <tbody>
                        <tr>
                            <th>Имя</th>
                            <th>Фамилия</th>
                            <th>Телефон</th>
                        </tr>
                            {contacts.map((contact) => (
                                    <Contact 
                                    key={contact.id}
                                    contact={contact}
                                    deleteContact={onContactDelete}
                                    />
                            ))}
                </tbody>
            </table>
        </>
    )
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts,  
        modalVisible: !!state.formItem,
        deleteContact,
    }
};

const mapDispatchToProps = {
    openModal: openModal,
    
}

export default connect( mapStateToProps, mapDispatchToProps ) (ContactList)