import React from "react";
import styled from "styled-components";

function Login(props) {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/assets/images/cta-logo-one.svg" alt="Logo 1" />
        </CTA>
        <BgImage />
      </Content>
    </Container>
  );
}

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px 40px;
  height: 100%;
`;

const BgImage = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-image: url("/assets/images/login-background.jpg");
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: -1;
`;

const CTA = styled.div`
  margin: 0 auto 2px auto;
  max-width: 650px;
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  transition-timing-function: ease-out;
  transition: opacity 0.2s;
  width:100%;
`;

const CTALogoOne = styled.img`
  max-width: 600px;
  min-height: 1px;
  margin-bottom: 12px;
  display: block;
  width: 100%;
`;

export default Login;
