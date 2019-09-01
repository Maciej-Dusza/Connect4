import React from "react";
import styled from "@emotion/styled";

const CircleStyled=styled.div`
    height: 50px;
    width: 50px;
    background-color: ${({color})=>color || 'white'};
    border-radius: 50%;
    margin: 5px;
`;

export class Circle extends React.Component{
    
    constructor(props){
        super(props);
        this.state={
            color: ""
        }
        this.onClick=this.onClick.bind(this);
    }

    render(){
        return(
            <CircleStyled color={this.state.color} onClick={this.onClick}/>              
        )
    }

    onClick(){
        if(this.state.color!==""){
             return;
        }
        this.setState({color: this.props.color}, ()=> {this.props.updateUser(this.props.circleIndex,this.props.circleSubindex);});
    }
};