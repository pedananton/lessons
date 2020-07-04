import React from 'react'
import {connect} from 'react-redux'


function ToDoListItem({item, onToggle}) {
    item.id = Date.now();    
    
    return <li onClick={
                onToggle.bind(null, item)} 
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
