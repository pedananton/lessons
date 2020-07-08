import React from 'react'
import {connect} from 'react-redux'
import Contact from './Contact'
import { toggleAction } from '../store/actions/index'
import Modal from './Modal'
import { openModal } from '../store/actions/index'

function ContactList({ modalVisible, openModal, contacts }) {
    //debugger
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
        modalVisible: !!state.contacts.formItem,
    }
};
/**
 * реализовать openmodal
 */
const mapDispatchToProps = {
    toggleAction,
    openModal: openModal,
}

export default connect( mapStateToProps, mapDispatchToProps ) (ContactList)
