import styled from "styled-components";

const Navitem = styled.div`
    color: rgb(245, 245, 247);
    /* font-family: "SF Pro Text","Myriad Set Pro","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif; */
    font-size: 12px;
    line-height: 3.66667;
    font-weight:100;
    letter-spacing: 0.3px;
    color: #ffffff;
    display: inline-block;
    padding: 0 8px;
    height: 44px;
    opacity: .8;
    background: no-repeat;
    white-space: nowrap;
    margin: 0px 25px;
    display: flex;
    align-items: center;
    &:hover{
        color:#ffffff;
    };
    & img{
        height: 30px;
        width: 45px;
        border-top-left-radius:30px;
        border-bottom-left-radius:45px;
        border-top-right-radius:40px;
        border-bottom-left-radius:45px;
    };
`
const NavItem = ({children}) => {
    return (
        <Navitem>{children}</Navitem>
    )
}

export { NavItem };