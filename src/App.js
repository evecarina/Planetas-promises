import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {search} from './actions'

const App = ({items}) =>  {
  return (
    <section>
        <button onClick={() => search()}>Click</button>
          <div>{ items.length!=0 ? 
                  items[0].pl_name
                  :
                  <br/>
                }</div>
      
      </section>
  );
}

const mapToProps = ({items}) => ({items})
export default  connect (mapToProps)(App);


