import React from "react";
import styled from "@emotion/styled";

const CircleStyled=styled.div`
    height: 75px;
    width: 75px;
    background-color: ${({color})=>color || 'gray'};
    border-radius: 50%;
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
        this.setState({color: this.props.color}, ()=> {this.props.updateUser();});
    }
};