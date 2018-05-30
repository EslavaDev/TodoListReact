import React, { Component } from "react";
import "../styles/TodoBox.css";
import PropTypes from 'prop-types'


export default class TodoBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoText: ""
    };

    this.onSubmit = this.onSubmit.bind(this)
    this.getInputValue = this.getInputValue.bind(this)
  }

  onSubmit(e){
      e.preventDefault()
      this.props.onSubmit(e)
      this.setState({todoText:''})
  }

  getInputValue(e){
      return this.state.todoText;
  }
  render() {
    return (
      <div className="TodoBox">
      <form onSubmit={ this.onSubmit }>
        <input
          type="text"
          className="TodoBox-input"
          value={this.state.todoText}
          onChange={e => {
            this.setState({ todoText: e.target.value });
          }}
        />
        <input 
        type="submit" 
        value="Agregar" 
        className="TodoBox-button" 
        />
        </form>
      </div>
    );
  }
}

TodoBox.propTypes = {
    onSubmit: PropTypes.func.isRequired
}
