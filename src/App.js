import React, { Component } from 'react';
import './App.css';
import {connect} from 'redux-zero/react';
import {searchList} from './actions'

const App = ({items}) =>  {
  return (
    <section>
        <button onClick={() => searchList()}>Click</button>
          <div>
            {
              items.length!=0 ? 
              <img src={items[0].pl_img}/>             
                :
              <br/>
            }
            {            
            items.length!=0 ? 
             items[0].pl_name
               :
             <br/>
            }  
            { 
             items.length!=0 ? 
             items[0].pl_telescope
               :
             <br/>
            } 
          </div>        
      </section>
  );
}

const mapToProps = ({items}) => ({items})
export default  connect (mapToProps)(App);


