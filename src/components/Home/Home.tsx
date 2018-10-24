import * as React from 'react';
import './Home.scss';

const logo = require('./logo.svg');

interface I_state {
  nav?: Array<string>
}

class Home extends React.Component {
  public constructor(arg: Object) {
    super(arg);
  }
  public render(): Object {
    console.log('Home render..');
    return (
      <div className="home">
        <div><img src={logo} alt="" className="logo" /></div>
        <div>Hello World!</div>
      </div>
    );
  }
}

export default Home;
