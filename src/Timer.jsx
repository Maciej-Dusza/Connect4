import React from "react";

export class Timer extends React.Component{

    constructor(){
        super();
        this.state={
            isOn:false,
            time: 0,
            start: 0
        }
        this.startTimer=this.startTimer.bind(this);
        this.stopTimer=this.stopTimer.bind(this);
    };

    componentDidUpdate(prevProps){
        if(this.props.activeGame==="Game" && (prevProps.activeGame===""|| prevProps.activeGame==="Pause")){
            this.startTimer();
            console.log("Timer Started")
        }
        if(this.props.activeGame==="Pause" && prevProps.activeGame === "Game"){
            this.stopTimer();
            console.log("Timer Stoped");
        }
        if(this.props.activeGame==="" && (prevProps.activeGame==="Game"|| prevProps.activeGame==="Pause")){
            this.resetTimer();
            console.log("Timer Reset");
        }
    };

    startTimer() {
        this.setState({
            isOn: true,
            start: Date.now()-this.state.time
        })
        this.timer = setInterval(
            () => this.setState({time: Date.now() - this.state.start}), 
            1000
            );
      };

      stopTimer(){
        this.setState({
            isOn: false
        });    
        clearInterval(this.timer);
      }
      resetTimer(){
          this.setState({
              time:0
          })
      }

      milisecoundsToTime(msec){
        let min = Math.floor(msec/(1000 * 60) % 60);
        let minFormated = min<10? `0${min}` : min;
        
        let sec = Math.floor(msec/1000 % 60);
        let secFormated = sec<10? `0${sec}` : sec;
        
        return minFormated + ":" + secFormated
      };

    
    render(){
        return(
            <div>
                <div>{this.milisecoundsToTime(this.state.time)}</div>
            </div>

        )
    };
}