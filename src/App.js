import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {searchItem, search} from './actions';
import { connect } from 'redux-zero/react';
const Item = ({item, index}) =>{ 
  return (
		<section key={index} className="items">
      <div >
				<img src={item.pl_img}/>
			</div>
			<div >
				{item.pl_name}
			</div>
			<div>
       {item.pl_telescope}
			</div>
		</section>
	);
}

const App = ({items, query}) => 
{
  let list = "";
  if(items.length == 0)
    search();
  else
  {
    list = items.map((item, index) =>
    {
      console.log("item", item);
      return <Item key={index} item = {item} index={index} />;
    })
  }
    return (
      <section align="center">
        <div>
          <ul>
            {list}
          </ul>
        </div>
      </section>
    );
  
}

const mapToProps = ({items, query}) => ({items, query});
export default connect(mapToProps)(App);