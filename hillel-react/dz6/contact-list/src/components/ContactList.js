import React from 'react'
import {connect} from 'react-redux'
import api from '../api'
import Contact from './Contact'
 

function ContactList() {
    return (
        <>
            <ul>
                <Contact></Contact>
            </ul>
        </>
    )
}

export default connect() (ContactList)
