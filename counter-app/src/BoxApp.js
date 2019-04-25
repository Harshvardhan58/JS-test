import React,{Component} from 'react';
import {Row,Col,Layout,Button} from 'antd';
import styled from 'styled-components';
const {Content} = Layout;
const MyRow = styled(Row)`
  margin:2em;
  margin-left:4em !important;
`
const MyBox = styled(Col)`
height:40px;
width: 40px;
background:red;
`
class BoxApp extends Component{
    constructor(props){
        super(props);
        this.state={
            left:0,
            timer:false
        }      
    }
    animateBox(){
        if(this.state.timer){
            clearInterval(this.state.timer);
        }
        const start = Date.now();
        this.setState(()=>{
            const tmp = setInterval(()=> {
                const timePassed = Date.now() - start;
                this.setState({ left: timePassed / 2 });
                if (timePassed > 2000){
                    clearInterval(this.state.timer);
                    this.setState({
                        timer:false
                    });
                } 
            }, 10);
            return {
                timer:tmp
            }
        })   
    }
    render(){
        return (
            <Content>
                <MyRow>
                    <Col span={2}>
                        <Button type="primary" onClick={()=>this.animateBox()} >Move</Button>                
                    </Col>
                </MyRow>
                <MyRow>
                    <MyBox style={{left:this.state.left}} span={1}>         
                    </MyBox>
                </MyRow>    
            </Content>
        );
    }
}
export default BoxApp;