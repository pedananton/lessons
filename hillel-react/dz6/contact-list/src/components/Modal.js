import React from "react";
import { connect } from "react-redux";
import {
  closeModal,
  changeFormItem,
  saveFormContact,
} from "../store/actions/index";

function Modal({
  contact,
  onNameChange,
  onSurnameChange,
  onPhoneChange,
  onSave,
  onCancel,
}) {
  function onNameValueChange(e) {
    const changes = {
      name: e.target.value,
    };
    onNameChange(changes);
  }
  function onSurnameValueChange(e) {
    const changes = {
      surname: e.target.value,
    };
    onSurnameChange(changes);
  }
  function onPhoneValueChange(e) {
    const changes = {
      phone: e.target.value,
    };
    onPhoneChange(changes);
  }

  return (
    <>
      <div style={backgroundStyles} />
      <div style={modalStyles}>
        <div>
          <input
            style={inputStyles}
            type="text"
            name="name"
            onChange={onNameValueChange}
            value={contact.name}
          />
          <input
            style={inputStyles}
            type="text"
            onChange={onSurnameValueChange}
            value={contact.surname}
          />
          <input
            style={inputStyles}
            type="text"
            onChange={onPhoneValueChange}
            value={contact.phone}
          />
        </div>
        <div>
          <button onClick={() => onSave(contact)}>Save</button>
          <button onClick={() => onCancel()}>Cancel</button>
        </div>
      </div>
    </>
  );
}

const backgroundStyles = {
  height: "100%",
  width: "100%",
  backgroundColor: "white",
  opacity: "0.4",
  position: "absolute",
  top: "0",
  left: "0",
};

const modalStyles = {
  position: "absolute",
  top: "200px",
  left: "300px",
  padding: "30px 50px 10px",
  border: "1px solid black",
  backgroundColor: "white",
};

const inputStyles = {
  width: "200px",
};

function mapStateToProps(state) {
  return {
    contact: state.formItem,
  };
}

const mapDispatchToProps = {
  onCancel: closeModal,
  onNameChange: changeFormItem,
  onSurnameChange: changeFormItem,
  onPhoneChange: changeFormItem,
  onSave: saveFormContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
