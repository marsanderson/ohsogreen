import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// import logo from '../logo.svg';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";

export default class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            {/* https://www.iconfinder.com/icons/1243689/call_phone_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/Makoto_msk */}

                    <Link className="nav-link" to='/'>Home
                        {/* <img src={logo} alt="store" className="navbar-brand"/> */}
                        {/* I comment this out to gt rid of the phone logo. */}
                        <span className="sr-only">(current)</span>
                    </Link>
             
            <ul className="navbar-nav align-items-center">
                <li className="nav-item">
                    <Link to="/productlist" className="nav-link">
                        Products
                    </Link>
                </li>

                <Link className="nav-link" to='./Blog'>Blog
                        <span className="sr-only">(current)</span>
                    </Link>

                <Link className="nav-link" to='./About'>About Me
                        <span className="sr-only">(current)</span>
                    </Link>

            </ul>
            
            <ul className="navbar-nav mx-auto">
                <span className="nav-item text-title">Oh So Green!</span>
            </ul>
        
            <Link to="/cart" className="ms-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus"/>
                    </span>
                    My Cart
                </ButtonContainer>
            </Link>
            </NavWrapper>


        )
    }
}

const NavWrapper = styled.nav`
background:var(--mainGreen);
.nav-link{
    color:var(--mainWhite)!important;
    font-size:1.3rem;
    text-transform:capitalize;
}
.nav-item{
    color:var(--mainWhite)!important;
    font-size:2rem;
}
`;