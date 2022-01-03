import './App.css';
import styled from 'styled-components';
import Button from './components/Button';
import StyleButton from './components/StyleButton';
// const Circle = styled.div`
//   width:100px;
//   height: 100px;
//   background: red;
//   border-radius: 50%;
// `;
const Container1 = styled.div`
  margin: 0 auto;
  max-width:600px;
  width: 100%;
  height: 100px;
`;
const Container2 = styled.div`
  margin: 0 auto;
  max-width:200px;
  display:inline-flex;
  width: 100%;
  height: 200px;
`;
// const BlackContainer = styled(Container)`
//   background-color: black;
// `;
// const RedContainer = styled(Container)`
//   background-color: red;
// `;
const HeadContainer = styled(Container1)`
  background-color:lightpink;
  text-align:left;
`;
const ColumnContainer = styled(Container2)`
  background-color:khaki;
  text-align:left;
`;
const FooterContainer = styled(Container1)`
  background-color:lightsalmon;
  text-align:left;
`;
function App() {
  return (
    <div className="App">
      {/* <Button size="large" color="blue">파란버튼</Button>
      <Button size="medium" color="gray">회색버튼</Button>
      <Button size="small" color="pink">핑크버튼</Button>
      <Button>버튼</Button> */}

      <div>
        <Button size="large" color="white" background="bgblue">BUTTON</Button>
        <Button size="medium" color="white" background="bgblue">BUTTON</Button>
        <Button size="small" color="white" background="bgblue">BUTTON</Button>
      </div>
      <div>
        <Button size="large" color="white" background="bggray">BUTTON</Button>
        <Button size="medium" color="white" background="bggray">BUTTON</Button>
        <Button size="small" color="white" background="bggray">BUTTON</Button>
      </div>
      <div>
        <Button size="large" color="white" background="bgpink">BUTTON</Button>
        <Button size="medium" color="white" background="bgpink">BUTTON</Button>
        <Button size="small" color="white" background="bgpink">BUTTON</Button>
      </div>
      <div>
        <Button size="large" border="blueBd" color="blue" background="bgwhite">BUTTON</Button>
        <Button size="medium" border="grayBd" color="gray" background="bgwhite">BUTTON</Button>
        <Button size="small" border="pinkBd" color="pink" background="bgwhite">BUTTON</Button>
      </div>
      <div>
        <Button>BUTTON</Button>
      </div>
      <div>
        <Button>BUTTON</Button>
      </div>
      <div>
        <Button>BUTTON</Button>
      </div>
      

      {/* <Circle />
      <StyleButton>토마토버튼</StyleButton>
      <BlackContainer/>
      <RedContainer/> */}

      {/* <HeadContainer>header</HeadContainer>
      <ColumnContainer>column</ColumnContainer>
      <ColumnContainer>column</ColumnContainer>
      <ColumnContainer>column</ColumnContainer>
      <FooterContainer>Footer</FooterContainer> */}
    </div>
  );
}

export default App;
