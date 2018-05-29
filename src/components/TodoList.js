import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
import PropTypes from 'prop-types'

import '../styles/TodoList.css';

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {  }
    }
    render() {
        let items = this.props.items.map( (currentValue, index)=>{
            return(
                <TodoListItem name={currentValue} key={index}/>
            )
        })
        return (
            <div className="TodoList">
                <ul>
                    { items }
                </ul>
            </div>
        );
    }
}

TodoList.protoTypes = {
    items: PropTypes.array.isRequired
}