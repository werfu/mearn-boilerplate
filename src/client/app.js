import { hot } from 'react-hot-loader/root';
import React from 'react';
import Styles from './app.scss';

class App extends React.Component {
 
  render() {
      return (
         <h1>Hello from React!</h1>
      );
  }
}

export default hot(App);