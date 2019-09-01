import React from "react";
import styled from "@emotion/styled";

const MenuStyled=styled.div`
    width: 250px;
    background-color: silver;
    padding: 10px;
`;
export class Menu extends React.Component{
    render(){
        return(
        <MenuStyled>MENU</MenuStyled>
        );
    }
}