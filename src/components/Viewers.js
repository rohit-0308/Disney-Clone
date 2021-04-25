import styled from "styled-components";

const Viewers = (props) => {
  return (
    <Container>
      <Wrap>
          <img src="/assets/images/viewers-disney.png" alt="Disney+"/>
      </Wrap>
      <Wrap>
          <img src="/assets/images/viewers-marvel.png" alt="Marval"/>
      </Wrap>
      <Wrap>
          <img src="/assets/images/viewers-national.png" alt="National Geography"/>
      </Wrap>
      <Wrap>
          <img src="/assets/images/viewers-pixar.png" alt="Pixar"/>
      </Wrap>
      <Wrap>
          <img src="/assets/images/viewers-starwars.png" alt="Starwars"/>
      </Wrap>
    </Container>
  );
};

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-gap: 25px;
  gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
`;

const Wrap = styled.a``;

export default Viewers;
