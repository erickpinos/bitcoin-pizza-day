import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getTotalSupply, smartContractRead, queryTokenByID } from './utils/ontology';
import { hexstr2str } from './utils/utils';
import Pizza from './components/Pizza';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      totalSupply: '',
      pizzas: []
    }

  }

  async componentDidMount() {
    const name = await smartContractRead('name');
    const totalSupplyHex = await getTotalSupply();
    const totalSupply = parseInt(totalSupplyHex, 16);
    const token = await queryTokenByID();
    const pizzas = [token];
    const tokenID = token[0];
    const tokenName = hexstr2str(token[1]);
    const tokenURL = hexstr2str(token[2]);
    const tokenType = hexstr2str(token[3]);
    this.setState({
      title: name,
      totalSupply: totalSupply,
      pizzas: pizzas,
      tokenID: tokenID,
      tokenName: tokenName,
      tokenURL: tokenURL,
      tokenType: tokenType
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
        <div>{this.state.pizzas.map((currElement, index) => <Pizza key={index} element={currElement} />)}</div>
      </div>
    );
  }
}
