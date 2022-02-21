import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './app';
function Element(props){
  return(
    <React.Fragment>
      <App/>
    </React.Fragment>
  );
} 
ReactDOM.render(<Element/>, document.getElementById("root"));