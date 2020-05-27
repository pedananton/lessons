import React, { Component } from 'react'
import AdressListItem from './AdressListItem';

export default class AdressList extends Component {
    render() {
        
        return (
           <ul>
           {this.props.adresses.map((item) => (
               <AdressListItem key={item.id} item={item} 
               onDelete={this.props.onDelete} 
               onToggle={this.props.onToggle}
               />
               ))}
           </ul>
        );
    }
}
