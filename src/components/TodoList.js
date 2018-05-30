import React, { Component } from 'react'
import TodoListItem from './TodoListItem'
import PropTypes from 'prop-types'

import '../styles/TodoList.css';

export default class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = { 
            items: this.props.items
         }

    }

    componentWillReceiveProps(nextProps){
        if(nextProps.lentgth != this.state.items.length){
            this.setState({ items: nextProps.items })
        }
    }
    render() {
        let items = this.state.items.map( (currentValue, index)=>{
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