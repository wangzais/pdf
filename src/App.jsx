import React, { Component } from 'react'
import './App.css'
import Fn from './yang'
import pdf1 from './pdf1'


export default class App extends Component {
  componentDidMount(){
   
  }
  render() {
    
    return (
      <div className="app">
        <button
          onClick={() => {
            this.btn();
          }}
        >
          点击
        </button>
        <div className="list">
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div> <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
          <div>111</div>
        </div>
      </div>
    );
  }
  
  btn(){
    // var doc = new jsPDF()
    var target = document.getElementsByClassName("app")[0];
    // console.log(Fn(target && target))
    // Fn(target)
    pdf1(target)
  }
}
