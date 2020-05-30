import React from 'react';
import AdressList from './AdressList';
import BookForm from './BookForm';

export default class Book extends React.Component {
    state = {
        adresses: [],
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


    render () {
        return (
            <>
            <center type="text/css" style={centrStyle}>contact list</center>
             <AdressList adresses={this.state.adresses} onDelete={this.deleteAdress} onHide={this.hideForm}/>
             <BookForm onSubmit={this.addNewAdress}/>
            </>
        );
    }
};

const centrStyle = {
    color: 'blue',
    fontWeight: 'lighter',
    fontSize: '150%',
}