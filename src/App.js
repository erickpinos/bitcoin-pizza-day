import React from 'react';
import logo from './logo.svg';
import './App.css';
import { getTotalSupply, smartContractRead, queryTokenByID } from './utils/ontology';
import { hexstr2str } from './utils/utils';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      totalSupply: ''
    }

  }

  async componentDidMount() {
    const name = await smartContractRead('name');
    const totalSupplyHex = await getTotalSupply();
    const totalSupply = parseInt(totalSupplyHex, 16);
    const token = await queryTokenByID();
    const tokenID = token[0];
    const tokenName = hexstr2str(token[1]);
    const tokenURL = hexstr2str(token[2]);
    const tokenType = hexstr2str(token[3]);
    this.setState({
      title: name,
      totalSupply: totalSupply,
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
          <p>{this.state.tokenID}</p>
          <p>{this.state.tokenName}</p>
          <p>{this.state.tokenURL}</p>
          <p>{this.state.tokenType}</p>
        </header>
      </div>
    );
  }
}
