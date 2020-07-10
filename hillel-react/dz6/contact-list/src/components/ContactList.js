import React from 'react'
import {connect} from 'react-redux'
import Contact from './Contact'
import Modal from './Modal'
import { openModal, toggleContact } from '../store/actions/index'

function ContactList({ onToggle, modalVisible, openModal, contacts }) {
    /**
     * реализовть логику открытие modal
     */
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
                                    onToggle={onToggle}
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
        onToggle: toggleContact,
    }
};

const mapDispatchToProps = {
    openModal: openModal,
}

export default connect( mapStateToProps, mapDispatchToProps ) (ContactList)