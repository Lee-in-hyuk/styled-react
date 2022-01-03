import styled from "styled-components";
//Button이라는 컴포넌트 만들기
const Button = styled.button`
    border-radius: 6px;
    padding: 20px;
    margin: 10px;
    font-size: 16px;
    background-color: ${(props)=>props.theme.blue};
    //App2컴포넌트에 있는 theme프로퍼티의 blue 값을 props로 가져옴.
    border: 1px solid ${(props)=>props.theme.pink};
    // color: ${(props)=>props.theme.main};
`;
export default function Button2(){
    return(
        <Button>버튼</Button>
    );
}