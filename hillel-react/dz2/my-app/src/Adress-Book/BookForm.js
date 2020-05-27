import React, { Component } from 'react'

export default class BookForm extends Component {
    state = {
        adressName: '',
        adressSurName: '',
        adressPhoneNumber: '',
    }
    onFormSubmit = (e) => {
        e.preventDefault();

        this.props.onSubmit({
            name: this.state.adressName,
            surname: this.state.adressSurName,
            phoneNumber: this.state.adressPhoneNumber,

        });

        this.setState(
            { adressName: '', adressSurName: '', adressPhoneNumber: ''},
            );
    }

    onInputChangeName = (e) => {
        this.setState({
            adressName: e.target.value,
        })
    }

    onInputChangeSurName = (e) => {
        this.setState({
            adressSurName: e.target.value,
        })
    }

    onInputChangePhoneNumber = (e) => {
        this.setState({
            adressPhoneNumber: e.target.value,
        })
    }

    render() {
        return <form onSubmit={this.onFormSubmit}>
         <input id="1" placeholder="name" type="text" 
         name="adressName" 
         value={this.state.adressName} 
         onChange={this.onInputChangeName}
         />

         <input id="2" placeholder="surname" type="text" 
         name="adressSurName" 
         value={this.state.adressSurName} 
         onChange={this.onInputChangeSurName}
         />
         
         <input id="3" placeholder="phone number" type="text"
         name="adressPhoneNumber"
         value={this.state.adressPhoneNumber} 
         onChange={this.onInputChangePhoneNumber}
         />
         <button>Add</button> 
        </form>
        
    }
}
