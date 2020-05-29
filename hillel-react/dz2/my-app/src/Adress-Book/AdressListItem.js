import React, { Component } from 'react';


export default class AdressListItem extends Component {
    onDeleteClick = (e) => {
        e.stopPropagation();
        this.props.onDelete(this.props.item.id);
    }

    onElementClick = () => {
        this.props.onToggle(this.props.item.id);
    }

    getElementStyling(item) {
        const styling = {...ELEMENT_STYLING};

        return styling;
    }

    render() {
        const {item} = this.props;
        return (
            <li onClick={this.onElementClick} 
             style={this.getElementStyling(item)}>
             {item.name} 
             &nbsp;&nbsp;
             {item.surname} 
             &nbsp;&nbsp;
             {item.phoneNumber} 
             &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             <span onClick={this.onDeleteClick}>x</span>
            </li>
        )
    }
}

const ELEMENT_STYLING = {
    backgroundColor: '#f5f0f0',
}