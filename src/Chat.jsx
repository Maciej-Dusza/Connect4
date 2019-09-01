import React from "react";
import styled from "@emotion/styled";

const ChatStyled=styled.div`
    width: 500px;
    background-color: silver;
    padding: 10px;
`;

export class Chat extends React.Component{
    render(){
        return(
        <ChatStyled>Chat {this.props.activeUser}</ChatStyled>
        );
    }
}