import React from 'react';

import('./form.scss');

export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: '',
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <p>Name: {this.state.name}</p>
        <p># of Updates: {this.state.count}</p>

        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" onChange={this.handleChange} />
            <button type="submit">Submit</button>
          </label>
        </form>
      </>
    );
  }
}
