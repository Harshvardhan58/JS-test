import React, { Component } from 'react';
import './CounterApp.css';

class Counter extends Component{
  constructor(props){
    super(props);
    this.state={
      count:0
    }
  }
  increment(){
    this.setState({
      count:++this.state.count
    })
  }
  decrement(){
      this.setState({
        count:--this.state.count
      })
  }
  render(){
    return (
<         div className="row counter" >
            <div className="col-md-1 countercount"></div>
            <div className="col-md-1">
              <button  type="button" onClick={()=>this.decrement()} className="btn btn-secondary decrement btn-sm">
                &#8722;                           
              </button>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <input value={this.state.count} type="number" disabled className="form-control" />
              </div>
            </div>
            <div className="col-md-1">
              <button type="button" onClick={()=>this.increment()} className="btn btn-secondary increment btn-sm">
                &#x2b;
              </button>
            </div>
            <div className="col-md-1">
              <button type="button" onClick={()=>this.props.deleteCounter()} className="btn btn-danger delete btn-sm">
                Delete
              </button>
            </div>
          </div>
    );
  }
}

class CounterApp extends Component {
  constructor(props){
    super(props);
    this.state={
      counters:[]
    }
  }
  deleteCounter(id){
    console.log(id);
    const tmp = this.state.counters.filter(elem=> elem!=id);
    this.setState({
      counters:tmp
    })
  }
  addCounter(){
    this.setState({
      counters:this.state.counters.concat(this.state.counters.length? this.state.counters[this.state.counters.length-1]+1 : 0)})
  }
  render() {
    return (
      
        <div className="container">
        {console.log(this.state)}
          <div className="row" >
            <div className="col-md-2">
              <button className="btn btn-primary" id="add_counter" onClick={()=>this.addCounter()} >Add Counter</button>                
            </div>
          </div>
          {
          this.state.counters.map((id)=>(
            <Counter key={id} id={id} deleteCounter={()=>this.deleteCounter(id)}/>
          ))
        }
        </div>
        
    );
  }
}

export default CounterApp;
