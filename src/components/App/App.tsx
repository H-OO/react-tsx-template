import * as React from 'react';
import '../../asset/css/reset.css';
import './App.scss';
const { HashRouter, Route } = require('react-keeper');
import Rem from '../../asset/lib/rem';
import Home from '../Home/Home';

class App extends React.Component {
  public componentWillMount(): void {
    const rem = new Rem();
    rem.init();
  }
  public render(): Object {
    console.log('App render..');
    return (
      <HashRouter>
        <div className='App'>
          <Route component={Home} path='/>' index />
        </div>
      </HashRouter>
    );
  }
}

export default App;
