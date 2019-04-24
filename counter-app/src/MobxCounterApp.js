import React, { Component } from 'react';
import {observer} from 'mobx-react';
import './CounterApp.css';
import {Button,InputNumber,Row,Col,Layout} from 'antd';
import counterStore from './store/CounterStore';
import styled from 'styled-components';
const {Content} = Layout;
const MyRow = styled(Row)`
  margin:2em;
  margin-left:4em !important;
`
@observer
class MobxCounter extends Component{

  render(){
      const counter = this.props.counter;
    return (
        <MyRow >
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
          </MyRow>
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
          <MyRow  >
            <Col span={6}>
              <Button type="primary"  onClick={()=>counterStore.addCounter()} >Add MobxCounter</Button>                
            </Col>
          </MyRow>
          <MyRow >
            <Col span={24}>
              {`No. of Counters are ${store.getCount}`}
            </Col>
            <Col span={24}>
              { max }
            </Col>
          </MyRow>
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
