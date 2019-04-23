import React,{Component} from 'react';
class BoxApp extends Component{
    constructor(props){
        super(props);
        this.boxRef = React.createRef();
    }
    animateBox(){
        let box = this.boxRef.current;
        const start = Date.now();
        const timer = setInterval(function() {
            const timePassed = Date.now() - start;
            box.style.left = timePassed / 2 + 'px';
            if (timePassed > 2000){
                clearInterval(timer);
            } 
        }, 10);    }
    render(){
        return (
            <div className="conatiner">
                <div className="row">
                    <div className="col-md-2">
                        <button onClick={()=>this.animateBox()} className="btn btn-primary" id="move" >Move</button>                
                    </div>
                </div>
                <div className="row">
                    <div id="box" ref={this.boxRef} className="col-md-1">         
                    </div>
                </div>
            </div>
        );
    }
}
export default BoxApp;