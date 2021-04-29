import styled from "styled-components";

const Footer = () => {
  return (
    <Container>
      <Text>Fake © Disney+</Text>
    </Container>
  );
};

const Container = styled.div`
  height: 60px;
  width: 100%;
  margin-top: 60px;
  background-color: #090b13;
`;

const Text = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    padding: 20px;
    text-transform: uppercase;
    font-size: 18px;
`;

export default Footer;
