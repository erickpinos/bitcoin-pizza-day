import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getTotalSupply, smartContractRead, queryTokenByID,
  queryTokenIDByIndex } from './utils/ontology';
import Pizza from './components/Pizza';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      totalSupply: '',
      tokens: []
    }

  }

  async componentDidMount() {
    const name = await smartContractRead('name');
    const totalSupplyHex = await getTotalSupply();
    const totalSupply = parseInt(totalSupplyHex, 16);
    var tokens = [];

    for (let i = 1; i < totalSupply + 1; i++) {
      const id = await queryTokenIDByIndex(i);
      const token = await queryTokenByID(id);
      tokens.push(token);
//      console.log('tokens', tokens);
    }

    this.setState({
      title: name,
      totalSupply: totalSupply,
      tokens: tokens
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.title}</p>
          <p>{this.state.totalSupply} total pizzas</p>
        </header>
        <div className="container m-5">
          <div className="row justify-content-center">
            {this.state.tokens.map((currElement, index) => <Pizza key={index} element={currElement} />)}
          </div>
        </div>
      </div>
    );
  }
}
