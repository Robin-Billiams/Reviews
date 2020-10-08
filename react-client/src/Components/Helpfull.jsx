import React from 'react'
import {gridContainerHelpful, helpfullButtons} from '../style.css'

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
                <div className={gridContainerHelpful}> 
                    <div >Helpful?</div>
                    <button  onClick={()=> this.clickHandler('yes')} 
                   
                    className={helpfullButtons}>
                        Yes {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.yes} </span>}
                        </button>
                    <button onClick={ ()=> this.clickHandler('no')} className={helpfullButtons}>No {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.no} </span>}</button>
                    <button onClick={()=>this.Report()} className={helpfullButtons}>Report</button>
                </div>
            )
        } else {
            return (
                <div className={gridContainerHelpful}> 
                    <div >Helpful?</div>
                    <button  onClick={()=> this.clickHandler('yes')} 
                   
                    className={helpfullButtons}>
                        Yes {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.yes} </span>}
                        </button>
                    <button onClick={ ()=> this.clickHandler('no')} className={helpfullButtons}>No {<span>&#183;</span>} {<span style={{color: "red"}}> {this.state.no} </span>}</button>
                    <div className={helpfullButtons} style={{transform: "translatey(0px)"}}>Reported</div>
                </div>
            )
        }
    
    }
}

export default Helpfull