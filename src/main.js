import React from 'react';
import './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: '',
      value2: '',
      resultText: '' // Adicione um estado para armazenar o resultado
    };
  }

  handleChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value });
  };

  mostrarResult = (param) => {
    // Faça o que for necessário com o parâmetro, por exemplo:
    this.setState({ resultText: 'Resultado: ' + param });
  };

  render() {
    return (
      <div className='main'>
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
        {/* Use uma função anônima para passar o parâmetro desejado */}
        <button onClick={() => this.mostrarResult(this.state.value1)}>Mostrar Resultado</button>
        <div className='resultado'>
          <h2 id='resultText'>{this.state.resultText}</h2>
        </div>
      </div>
    );
  }
}

export default Main;
