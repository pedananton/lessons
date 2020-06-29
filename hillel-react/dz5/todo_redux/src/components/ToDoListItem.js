import React from 'react'
import {connect} from 'react-redux'
import {addNewListItem} from '../store/actions'



function ToDoListItem({item, onToggle, isDone}) {
    item.id = Date.now();    
    return <li onClick={
                onToggle.bind(null, item)} 
                style={getStyles(item)}
                >
                {item.itemValue}
            </li>
}

function mapStateToProps(state) {
    return {
        log: console.log('mapStateToProps-todoItem', state),
        
    }
};

const mapDispatchToprops = {
    addNewListItem,
};

export default connect(mapStateToProps, mapDispatchToprops) (ToDoListItem)

function getStyles(item) {
    //console.log('getStyles-item',item)
    //debugger
    return {
        backgroundColor: item.isDone ? 'green' : 'tomato',
    }
}
