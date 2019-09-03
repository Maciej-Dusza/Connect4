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
        <MenuStyled>
            <div>MENU</div>
            <div>
                <button onClick={this.props.reset}>
                    Reset
                </button>
            </div>
            <div>Active User</div>
            <div>Timer</div>
            
        </MenuStyled>
        );
    }
}