import React from 'react';
import { hexstr2str } from '../utils/utils';

export default class Pizza extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      element: this.props.element,
      id: this.props.element[0],
      name: hexstr2str(this.props.element[1]),
      url: hexstr2str(this.props.element[2]),
      type: hexstr2str(this.props.element[3])
    }
  }

  componentDidMount() {
  }

  render() {
    return(
      <div className="col-3">
        <div className="card">
          <div>{this.state.id}</div>
          <div>{this.state.name}</div>
          <div>{this.state.url}</div>
          <div>{this.state.type}</div>
        </div>
      </div>
    );
  }

}
