import styled from "styled-components";

const Button = styled.button`
background-color: ${(prop) => {
    if (prop.type === "primary") { return "#006bdd" }
    else if (prop.type === "default") { return "white" }
    else if (prop.type === "dashed") { return "white" }
    else if (prop.type === "text") { return "white" }
    else if (prop.type === "link") { return "transparent" }
    }};
color: ${(prop) => {
    if (prop.type === "link") { return "#077dfb"}
    return prop.type === "primary" ? "white" : "black"
}};
border: ${(prop) => {
        if (prop.type === "primary") { return "1px solid #006bdd" }
        if (prop.type === "default") { return "1px solid black" }
        if (prop.type === "dashed") { return "1px dashed black" }
        if (prop.type === "text") { return "1px solid transparent" }
        if (prop.type === "link") { return "1px solid transparent" }
    }};
height: 40px;
width: 170px;
border-radius: 3px;
margin: 10px;
cursor: pointer;
&:hover{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    text-decoration: ${(prop) => { return prop.type === "link" ? "underline" : "none" }};
}
`

export { Button };