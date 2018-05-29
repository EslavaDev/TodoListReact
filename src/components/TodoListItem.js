import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoListItem extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <li>
                {this.props.name}
            </li>
        );
    }
}

TodoListItem.protoTypes = {
    name: PropTypes.string.isRequired
}