import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './CounterApp.css';
import counterStore from './store/CounterStore';
@observer
class MobxCounter extends Component{
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
      const id = this.props.id;
    return (
        <div className="row MobxCounter" >
            <div className="col-md-1 countercount"></div>
            <div className="col-md-1">
              <button  type="button" onClick={()=>counterStore.decrement(id)} className="btn btn-secondary decrement btn-sm">
                &#8722;                           
              </button>
            </div>
            <div className="col-md-2">
              <div className="form-group">
                <input value={counterStore.counterCount[id]} type="number" disabled className="form-control" />
              </div>
            </div>
            <div className="col-md-1">
              <button type="button" onClick={()=>counterStore.increment(id)} className="btn btn-secondary increment btn-sm">
                &#x2b;
              </button>
            </div>
            <div className="col-md-1">
              <button type="button" onClick={()=>counterStore.deleteCounter(id)} className="btn btn-danger delete btn-sm">
                Delete
              </button>
            </div>
          </div>
    );
  }
}
@observer
class MobxCounterApp extends Component {


  render() {
    const store = counterStore;

    return (
        
        <div className="container">
          <div className="row" >
            <div className="col-md-3">
              <button className="btn btn-primary" id="add_counter" onClick={()=>counterStore.addCounter()} >Add MobxCounter</button>                
            </div>
          </div>
          {
          counterStore.counters.map((id)=>(
            <MobxCounter key={id} id={id}/>
          ))
        }
        </div>
        
    );
  }
}

export default MobxCounterApp;
