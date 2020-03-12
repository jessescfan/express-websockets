import React from "react";
import styled from "styled-components";
import Channels from "./Channels";
import Topics from "./Topics";

const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  margin: 0 auto;
  width: 80rem;
`;

const Content = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Sidebar = styled.div`
  flex: .3;
  margin-right: 10rem;
`;

const Wrapper = styled.div`
 box-sizing: border-box;
 height: 100%;
 padding: 1rem;
 width: 100%;
`;

const Root = () => {
  return <Wrapper>
    <Container>
      <Content>
        <Channels/>
      </Content>
      <Sidebar>
        Recent Topics
        <Topics/>
      </Sidebar>
    </Container>
  </Wrapper>;
};

export default Root;