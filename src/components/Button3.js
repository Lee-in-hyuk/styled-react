import styled, { css } from "styled-components";
import { darken, lighten } from 'polished';

//App2에서 받는 props : children, theme, color
// 색상
//colorStyle변수 만들기
const colorStyle = css`
//구조분해할당 props객체에 담긴 값을 각각 theme과 color에 넣어줌
    ${({theme,color})=>{
        //theme이 가지고 있는 palette객체의 key를 컬러에 담김 값을 사용
        const selected = theme.palette[color];
        return css`
            background: ${selected};
            &:hover { //마우스 올렸을 때
                background: ${lighten(0.2, selected)}
            }
            &:active { //active는 동작했을 때
                background: ${darken(0.1, selected)}
            }
        `;
    }}
`;
//사이즈
const sizeStyle = css`
    ${props =>
        props.size === 'large' &&
        css`
            height: 50px;
            line-height: 50px;
            font-size: 24px;
            width: 300px;
        `
    }
    ${props =>
        props.size === 'medium' &&
        css`
            height: 30px;
            line-height: 30px;
            font-size: 18px;
            width: 200px;
        `
    }
    ${props =>
        props.size === 'small' &&
        css`
            height: 20px;
            line-height: 20px;
            font-size: 14px;
            width: 100px;
        `
    }
`;
const StyleButton = styled.button`
    //공통 스타일
    border: none;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    padding: 0 20px;
    line-height: 40px;
    margin: 10px;
    ${colorStyle};
    ${sizeStyle};
`;
export default function Button3({children, color, size}){
    return(
        <StyleButton size={size} color={color}>{children}</StyleButton>
    );
}
Button3.defaultProps = {
    color:'blue',
    size: 'medium'
}