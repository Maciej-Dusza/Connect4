import React from "react";
import styled from "@emotion/styled";

const MenuStyled=styled.div`
    width: 250px;
    background-color: silver;
    padding: 10px;
`;

const CircleStyled=styled.div`
    height: 50px;
    width: 50px;
    background-color: ${({color})=>color || 'white'};
    border-radius: 50%;
    margin: 1px;
`;

const DivStyled=styled.div`
    height: 50px;
    margin: 5px;
    display:flex;
    align-items: center;
    width: ${(props)=>props.width || "auto"};
`;

export class Menu extends React.Component{
    render(){
        return(
        <MenuStyled>
            <div>MENU</div>
            <div>
                <button onClick={this.props.reset}>
                    Reset
                </button>
            </div>
            <DivStyled>
                <DivStyled>Active User:</DivStyled>
                <DivStyled width="70px">{this.props.activeUser}</DivStyled> 
                <CircleStyled color={this.props.color}/>          
            </DivStyled>
            <DivStyled>Timer</DivStyled>
            
        </MenuStyled>
        );
    }
}