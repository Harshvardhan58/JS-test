import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './CounterApp.css';
import {Button,InputNumber,Row,Col,Layout} from 'antd';
import counterStore from './store/CounterStore';
const {Content} = Layout;
@observer
class MobxCounter extends Component{

  render(){
      const counter = this.props.counter;
    return (
        <Row className="row">
            <Col span={2}>
              <Button  type="default" onClick={()=>counter.decrement()} >
                &#8722;                           
              </Button>
            </Col>
            <Col span={3}>
                <InputNumber value={counter.count} disabled  />
            </Col>
            <Col span={2}>
              <Button type="default" onClick={()=>counter.increment()} >
                &#x2b;
              </Button>
            </Col>
            <Col span={2}>
              <Button type="danger" onClick={()=>this.props.onDelete()} >
                Delete
              </Button>
            </Col>
          </Row>
    );
  }
}
@observer
class MobxCounterApp extends Component {


  render() {
    const store = counterStore;
    let max;
    if(store.getMax!==false){
      max=`Maximum value is ${store.getMax}`;
    }
    else{
      max=``;
    }
    return (
        
        <Content>
          <Row className="row" >
            <Col span={6}>
              <Button type="primary"  onClick={()=>counterStore.addCounter()} >Add MobxCounter</Button>                
            </Col>
          </Row>
          <Row className="row">
            <Col span={24}>
              {`No. of Counters are ${store.getCount}`}
            </Col>
            <Col span={24}>
              { max }
            </Col>
          </Row>
          {
          counterStore.counters.map((c,id)=>(
            <MobxCounter key={id}  counter={c} onDelete={()=>store.deleteCounter(id)}/>
          ))
        }
        </Content>
        
    );
  }
}

export default MobxCounterApp;
