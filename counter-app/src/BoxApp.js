import React,{Component} from 'react';
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
        this.state.timer = setInterval(()=> {
            const timePassed = Date.now() - start;
            this.setState({ left: timePassed / 2 });
            if (timePassed > 2000){
                clearInterval(this.state.timer);
                this.setState({
                    timer:false
                });
            } 
        }, 10);    }
    render(){
        return (
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-2">
                        <button onClick={()=>this.animateBox()}  className="btn btn-primary" id="move" >Move</button>                
                    </div>
                </div>
                <div className="row">
                    <div id="box" style={{left:this.state.left}} className="col-md-1">         
                    </div>
                </div>
            </div>
        );
    }
}
export default BoxApp;