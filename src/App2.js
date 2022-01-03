import styled, { ThemeProvider } from "styled-components";
import Button2 from "./components/Button2";
import Button3 from "./components/Button3";
const Container = styled.div`
  max-width:600px;
  width: 100%;
  height: 100px;
`;
// const theme1 = {
//     blue: "skyblue",
//     pink: "pink",
//     main: "red"
// }
const palette = {
    blue: '#228be6',
    gray: '#496057',
    pink: '#f06595'
}
export default function App2(){
    return(
        <Container>안녕하세요
            {/* props로 theme,color,children 총 3개를 전달해주고 있음 */}
            <ThemeProvider theme={{palette}}>
                <Button3 color="pink" size="medium">버튼</Button3>
                <Button3 color="gray" size="large">버튼</Button3>
                <Button3 color="blue" size="small">버튼</Button3>
            </ThemeProvider>
        </Container>
    );
}