import './Button.scss';
export default function Button({children, size, background, color, border}){
    return(
        <button className={`Button ${border} ${color} ${background} ${size}`}>{children}</button>
    );
}
//props 디폴트 설정
Button.defaultProps = {
    size: 'medium',
    color: 'black'
}