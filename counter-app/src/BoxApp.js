import React,{Component} from 'react';
import {Row,Col,Layout,Button} from 'antd';
const {Content} = Layout;
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
                <Row className="row">
                    <Col span={2}>
                        <Button type="primary" onClick={()=>this.animateBox()} >Move</Button>                
                    </Col>
                </Row>
                <Row className="row">
                    <Col id="box" style={{left:this.state.left}} span={2}>         
                    </Col>
                </Row>
            </Content>
        );
    }
}
export default BoxApp;