import React, { Component } from 'react';
import {Route,NavLink,BrowserRouter as Router,Switch }from 'react-router-dom';
import CounterApp from './CounterApp';
import BoxApp from './BoxApp';
import MobxCounterApp from './MobxCounterApp';
import PostApp from './PostApp';
import './App.css';
import {Layout,Menu} from 'antd';

const {Header,Content} = Layout;

class App extends Component {
  
  render() {
    return (
      <Layout>
        <Router>
            <Header style={{backgroundColor:'white'}}>
              <Menu mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1">
                  <NavLink exact activeClassName="active" className="nav-link" to="/">Ques1</NavLink>
                </Menu.Item>

                <Menu.Item key="2">
                  <NavLink activeClassName="active" className="nav-link" to="/box">Ques2</NavLink>
                </Menu.Item>

                <Menu.Item key="3">
                  <NavLink activeClassName="active" className="nav-link" to="/mobx">Mobx</NavLink>
                </Menu.Item>

                <Menu.Item key="4">
                  <NavLink activeClassName="active" className="nav-link" to="/posts">Posts</NavLink>
                </Menu.Item>
              </Menu>
            </Header>
            <Layout>
              <Content>
                <Switch>
                  <Route exact path="/" component={CounterApp} />
                  <Route path="/box" component={BoxApp} />
                  <Route path='/mobx' component={MobxCounterApp}/>
                  <Route path='/posts' component={PostApp}/>
                </Switch>
              </Content>
            </Layout>
        </Router>   
      </Layout> 
    );
  }
}

export default App;
