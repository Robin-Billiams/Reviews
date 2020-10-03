import React from 'react'

class Helpfull  extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            yes: props.yes,
            no: props.no,
            helpfullClick: props.helpfullClick,
            id: props.id,
            Report: false
        }
    }
    clickHandler(param) {
        console.log('hit')
        if (param === 'yes') {
            this.setState({
                yes: this.state.yes + 1
            })
            this.state.helpfullClick('yes', this.state.id)
        } else {
            this.setState({
                no: this.state.no + 1
            })
            this.state.helpfullClick('no', this.state.id)
        }
    }
    Report() {
        this.setState({
            Report: true
        })
    }
    render() {
        if (!this.state.Report) {
            return (
                <div className="grid-container-helpful"> 
                    <div >Helpful?</div>
                    <button  onClick={()=> this.clickHandler('yes')} 
                   
                    className="helpfull-Buttons">
                        Yes {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.yes} </span>}
                        </button>
                    <button onClick={ ()=> this.clickHandler('no')} className="helpfull-Buttons">No {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.no} </span>}</button>
                    <button onClick={()=>this.Report()} className="helpfull-Buttons">Report</button>
                </div>
            )
        } else {
            return (
                <div className="grid-container-helpful"> 
                    <div >Helpful?</div>
                    <button  onClick={()=> this.clickHandler('yes')} 
                   
                    className="helpfull-Buttons">
                        Yes {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.yes} </span>}
                        </button>
                    <button onClick={ ()=> this.clickHandler('no')} className="helpfull-Buttons">No {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.no} </span>}</button>
                    <div className="helpfull-Buttons" style={{transform: "translatey(0px)"}}>Reported</div>
                </div>
            )
        }
    
    }
}

export default Helpfull