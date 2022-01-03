import styled from "styled-components";
const ButtonS = styled.button`
    border-radius:6px;
    color: #fff;
    background: tomato;
    padding: 20px;
`;
export default function StyleButton({children}){

    return(
        <ButtonS>{children}</ButtonS>
    );
}