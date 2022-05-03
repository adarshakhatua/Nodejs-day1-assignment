import styled from "styled-components";
import { NavItem } from "./navitem";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";

const Nav = styled.nav`
    background-color: rgba(0, 0, 0, 0.8);
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    z-index: 1;
    width: 100%;
    margin: 0px 0px 10px;
    t
    & div{
        cursor: pointer;
    }
`

const Navbar = () => {

    return (
        <Nav>

            
            <Link to="/"><NavItem><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLkGLdqrMsSUH2AfMA5BGFCE4BSD0Fm5JyyAXkylSm72p7wZKG" id="logo" alt="" /></NavItem></Link>
            <Link to="/bestseller" style={{ textDecoration: "none" }}><NavItem>Best Seller</NavItem></Link>
            <Link to="/topdeals" style={{ textDecoration: "none" }}><NavItem>Top Deals</NavItem></Link>
            <Link to="/electronics" style={{ textDecoration: "none" }}><NavItem>Electronics</NavItem></Link>
            <Link to="/about" style={{ textDecoration: "none" }}><NavItem>About</NavItem></Link>
            <Link to="/contact" style={{ textDecoration: "none" }}><NavItem>Contact</NavItem></Link>
            <Link to="/faq" style={{ textDecoration: "none" }}><NavItem>FAQ</NavItem></Link>
            <Link to="/cart" style={{ textDecoration: "none" }}><NavItem><img src="https://library.kissclipart.com/20181002/lcq/kissclipart-e-commerce-names-ideas-clipart-shopping-cart-shopp-7051bd1619b6e48a.jpg" alt="" /></NavItem></Link>
        </Nav>
    )
}

export { Navbar };