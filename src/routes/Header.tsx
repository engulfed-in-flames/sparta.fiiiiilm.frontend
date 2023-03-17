import styled from "styled-components";

const Wrapper = styled.div`
  height: 180px;
  display: grid;
  place-content: center center;
  background-color: rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: bold;
`;

function Header() {
  return (
    <Wrapper>
      <Title>Hello React!</Title>
    </Wrapper>
  );
}

export default Header;
