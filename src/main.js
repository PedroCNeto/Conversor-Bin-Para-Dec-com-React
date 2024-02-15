import React from 'react';
import './main.css';

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value1: '',
      resultText: '' // Adicione um estado para armazenar o resultado
    };
  }

  handleChange = (e, inputName) => {
    this.setState({ [inputName]: e.target.value });
  };

  mostrarResult = (param) => {
    // Faça o que for necessário com o parâmetro, por exemplo:
    this.setState({ resultText: this.converter(param) });
  };

  converter = (param) => {
    let valores = param.split("");
    let valoresInt = [];
    let length = valores.length;
    for (let i = 0; i < length; i++){
        valoresInt.push(parseInt(valores[i]));
    }
    let valoresIntReverse = valoresInt.reverse();
    let sum = 0;
    let mult = 0;
    let erro = null;
    for (let i = 0; i < valoresIntReverse.length; i++) {
      const number = valoresIntReverse[i];
      if (number !== 0 && number !== 1) {
        erro = "Erro: Números diferentes de 0 ou 1";
        break;
      } else {
        sum = sum + (number * (Math.pow(2, mult)));
        mult++;
      }
    }
    
    if (erro) {
      return erro;
    }
    return "Resultado: " + sum;
  }

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
          <div className='resultado'>
            <h2 id='resultText'>{this.state.resultText}</h2>
          </div>
        </div>
        <div className='botao'>
          <button className='botaoResult' onClick={() => this.mostrarResult(this.state.value1)}>Mostrar Resultado</button>
        </div>
        {/* Use uma função anônima para passar o parâmetro desejado */}

      </div>
    );
  }
}

export default Main;
