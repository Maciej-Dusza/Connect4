import React from "react";
import styled from "@emotion/styled";
import HeaderLogo from "../assets/HeaderLogo.png";
import { Link } from "react-router-dom";


const HeaderStyled = styled.div`
    position:fixed;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.3);
    width: 100%;
    height: 60px;
    background-color: #fff;
    top:0px;
    z-index:2;  
`;

export class Header extends React.Component {

    render() {
        return (
            <HeaderStyled>
                <img height="90%" src={HeaderLogo} alt="HeaderLogo" />
                <Link to="/">Game  </Link>
                <Link to="/options">Options</Link>
            </HeaderStyled>
        )

    }
};