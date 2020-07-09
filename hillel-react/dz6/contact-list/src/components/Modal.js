import React from 'react'
import { connect } from 'react-redux';
import {
    closeModal,
    changeFormItem,
    saveFormContact,
} from '../store/actions/index';

function Modal({ contact, onChange, onSave, onCancel }) {
    function onValueChange(e) {
        const changes = {
            content: e.target.value,
        };
        onChange(changes);
    }

    return (
        <>
            <div style={backgroundStyles} />
            <div style={modalStyles}>
                <div>
                    <input
                        style={inputStyles}
                        type="text"
                        name='name'
                        onChange={onValueChange}
                        value={contact.content}
                    />
                    <input
                        style={inputStyles}
                        type="text"
                        onChange={onValueChange}
                        
                    />
                    <input
                        style={inputStyles}
                        type="text"
                        onChange={onValueChange}
                        
                    />
                </div>
                <div>
                    <button onClick={() => onSave(contact)}>Save</button>
                    <button onClick={() => onCancel()}>Cancel</button>
                </div>
            </div>
        </>
    )
}

const backgroundStyles = {
    height: '100%',
    width: '100%',
    backgroundColor: 'white',
    opacity: '0.4',
    position: 'absolute',
    top: '0',
    left: '0',
};

const modalStyles = {
    position: 'absolute',
    top: '200px',
    left: '300px',
    padding: '30px 50px 10px',
    border: '1px solid black',
    backgroundColor: 'white',
};

const inputStyles = {
    width: '200px',
};

function mapStateToProps(state) {
    return {
        contact: state.formItem,
    };
}

const mapDispatchToProps = {
    onCancel: closeModal,
    onChange: changeFormItem,
    onSave: saveFormContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);