import styled from "styled-components";

const Div = styled.div`
  background-color: ${(props) => props.color};

  width: 100px;
  height: 100px;
`;

const Input = styled.input.attrs({ required: true })`
  color: red;
`;

function App() {
  return (
    <div className="App">
      <Div color="blue" />
      <Input />
    </div>
  );
}

export default App;
