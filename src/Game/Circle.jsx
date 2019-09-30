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
        this.onClick=this.onClick.bind(this);
    }

    render(){
        return(
            <CircleStyled color={this.props.color} onClick={this.onClick}/>              
        )
    }

    onClick(){
        if(this.props.color!==""){
             return;
        }
        else if(this.props.activeGame==="Game"){
        this.props.updateUser(this.props.circleIndex,this.props.circleSubindex);
        }
    }
};