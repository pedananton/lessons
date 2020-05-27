import React from 'react';
import AdressList from './AdressList';
import BookForm from './BookForm';


export default class Book extends React.Component {
    state = {
        adresses: [
            { id:1, name: 'name', surname: 'surname', phoneNumber: 'phoneNumber', isDelete: false },
            { id:2, name: 'name2', surname: 'surname2', phoneNumber: 'phoneNumber2', isDelete: false },
        ],
        
    };

    addNewAdress = (newAdress) => {
        newAdress.id = Date.now();
        newAdress.isDelete = false;

        this.setState({
            adresses: [...this.state.adresses, newAdress],
        });
    };
    
    deleteAdress = (id) => {
        this.setState({
            adresses: this.state.adresses.filter((item) => item.id !== id),
        })
    }

    toggleAdress = (id) => {
        this.setState({
            adresses: this.state.adresses.map((item) => 
             item.id !== id ? item : {...item, isDelete: !item.isDelete}
            ),
        });
    };
    render () {
        return (
            <>
             <AdressList adresses={this.state.adresses} onDelete={this.deleteAdress} onToggle={this.toggleAdress}/>
             <BookForm onSubmit={this.addNewAdress}/>
            </>
        );
    }
};

