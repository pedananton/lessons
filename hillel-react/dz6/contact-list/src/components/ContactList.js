import React from "react";
import { connect } from "react-redux";
import Contact from "./Contact";
import Modal from "./Modal";
import { openModal, deleteContact } from "../store/actions/index";

function ContactList({
  onContactDelete,
  deleteContact,
  modalVisible,
  openModal,
  contacts,
}) {
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
              onContactDelete={deleteContact}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    modalVisible: !!state.formItem,
  };
}

const mapDispatchToProps = {
  openModal,
  deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
