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
            { adressName: ''},
           // { adressSurName: ''},
         //   { adressPhoneNumber: ''},
            );
    }

    onInputChange = (e) => {
        this.setState({
            adressName: e.target.value,
        })
    }

    render() {
        return <form onSubmit={this.onFormSubmit}>
         <input id="1" placeholder="name" type="text" name="adressName" value={this.state.adressName} 
         onChange={this.onInputChange}/>
         <input id="2" placeholder="surname" type="text" name="adressSurName" 
         //value={this.state.adressSurName} 
         //onChange={this.onInputChange}
         />
         
         <input id="3" placeholder="phone number" type="text"/>
         <button>Add</button> 
        </form>
        
    }
}
