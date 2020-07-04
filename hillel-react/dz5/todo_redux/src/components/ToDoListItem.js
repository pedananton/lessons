import React from 'react'
import {connect} from 'react-redux'
import { toggleAction } from '../store/actions'

function ToDoListItem({item, isDone}) {
    item.id = Date.now();    
    return <li onClick={
                toggleAction.bind(null, item)} 
                style={getStyles(item)}
                >
                {item.title}
            </li>
}

function mapStateToProps(state) {
    return {
        //item: state,
    }
};

const mapDispatchToProps = {
    //onToggle,
}

export default connect(mapStateToProps, mapDispatchToProps) (ToDoListItem)

function getStyles(item) {
    return {
        backgroundColor: item.isDone ? 'green' : 'tomato',
    }
}
