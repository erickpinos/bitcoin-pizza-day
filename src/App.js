import { client } from 'ontology-dapi';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { hexstr2str } from './utils';

client.registerClient({});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      totalSupply: ''
    }

  }

  async componentDidMount() {
    const name = await this.smartContractRead('name');
    const totalSupplyHex = await this.getTotalSupply();
    const totalSupply = parseInt(totalSupplyHex, 16);
    this.setState({
      title: name,
      totalSupply: totalSupply
    })
  }

  async smartContractRead(operation) {
    const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';

    try {
      const result = await client.api.smartContract.invokeRead({ scriptHash, operation });
      console.log('onScCallRead finished, result:' + hexstr2str(result));
      return hexstr2str(result);
    } catch (e) {
      alert('onScCallRead canceled');
      console.log('onScCallRead error:', e);
    }
  }

  async getTotalSupply() {
    const scriptHash = '1da6f6ffd2811a73eed8acb624210d2a4682d6d1';
    const operation = 'totalSupply';

    try {
      const result = await client.api.smartContract.invokeRead({ scriptHash, operation });
      console.log('onScCallRead finished, result:' + result);
      return result;
    } catch (e) {
      alert('onScCallRead canceled');
      console.log('onScCallRead error:', e);
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>{this.state.title}</p>
          <p>{this.state.totalSupply} total pizzas</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
