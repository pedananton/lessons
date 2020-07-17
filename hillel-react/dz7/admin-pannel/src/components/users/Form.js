import React from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

function Form({user}) {
    

    console.log('user', user)
    return (
        <div>
            Form
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return{
        user: state.users.items.find(
            // eslint-disable-next-line
            (user) => user.id == props.match.params.id
        ),
    }
}

export default withRouter(connect(mapStateToProps)(Form))
