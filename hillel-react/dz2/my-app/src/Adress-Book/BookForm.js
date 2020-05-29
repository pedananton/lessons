import React, { Component } from 'react'


export default class BookForm extends Component {
    state = {
        adressName: '',
        adressSurName: '',
        adressPhoneNumber: '',
    }
    onFormSubmit = (e) => {
        e.preventDefault();
            const inputPhoneNumber = this.state.adressPhoneNumber;
            const inputName = this.state.adressName;
            const inputSurName = this.state.adressSurName;
        var re = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
        var valid = re.test(inputPhoneNumber);
        if (valid&&inputName&&inputSurName !== "") {
            this.props.onSubmit({
                phoneNumber: this.state.adressPhoneNumber,
                name: this.state.adressName,
                surname: this.state.adressSurName,
            });
        }else{
            (alert('Некорректный номер или имя!'))}

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
        this.setState({adressPhoneNumber: e.target.value})
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
