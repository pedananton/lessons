import React, { Component } from 'react'

export default class ContactsListForm extends Component {
    constructor () {
        super();
    this.state = {
        
        values: {
            name: 'contact.name',
            surname: 'Smith',
            phone: '000',
            id: '',
        },
        isValid: {
            name: true,
            surname: true,
            phone: true,
        },
        isFormValid: true,
    };

    this.onSaveClick = this.onSaveClick.bind(this);

   
    }

    validateInput(name, value) {
        const isValid = {
            ...this.state.isValid,
            [name]: this.isValueValid(name, value),
        };

        this.setState({
            isValid,
            isFormValid: !Object.keys(isValid).find((key) => !isValid[key]),
        });
    }

    isValueValid(name, value) {
        switch (name) {
            case 'name':
            case 'surname':
                return !!value;
            case 'phone':
                return (
                    !!value &&
                    value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g)
                );
            case 'age':
                return !!value && !isNaN(value);
        }
    }
    
    onSaveClick() {
        
        this.props.onSave({ ...this.state.values });
    }

    onInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            
            values: {
                ...this.state.values,
                [name]: value,
            },
        });

        this.validateInput(name, value);
    };
    
   
    componentDidMount = (contact) => {
        debugger
        const prevValue = this.state.values;
        const values = this.props.onToggle(contact);
        if (prevValue !== values) {
        //     this.setState({
        //         values: this.props.value,
        //     })
            console.log("componentDidUpdate", prevValue, values)
          }
      }
    render() {
     
     const { values, isValid } = this.state;
        return (
            <tr id="contactForm">
             <td>
              <input
               placeholder={"name"}
               className={isValid.name ? '' : 'error'}
               type="text"
               name="name"
               value={values.name}
               onChange={this.onInputChange}
              />
             </td>
             <td>
              <input
               placeholder={"surname"}
               className={isValid.surname ? '' : 'error'}
               type="text"
               name="surname"
               value={values.surname}
               onChange={this.onInputChange}
              />
             </td>
             <td>
              <input
               placeholder={"phone"}
               className={isValid.phone ? '' : 'error'}
               type="text"
               name="phone"
               value={values.phone}
               onChange={this.onInputChange}
              />
             </td>
             <td>
              <button
              onClick={
                  this.onSaveClick
                }
              disabled={!this.state.isFormValid}
              >Save</button>
             </td>
            </tr>
        )
    }
}
