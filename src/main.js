import React from 'react';
import './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: '',
      value2: ''
    };
  }

  handleChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value });
  };

  render() {
    return (
      <div className='inputs'>
        <h2>BINARIO</h2>
        <input
          type="number"
          value={this.state.value1}
          onChange={(e) => this.handleChange(e, 'value1')}
        />
        <h2>DECIMAL</h2>
        <input
          type="number"
          value={this.state.value2}
          onChange={(e) => this.handleChange(e, 'value2')}
        />
      </div>
    );
  }
}

export default Main;