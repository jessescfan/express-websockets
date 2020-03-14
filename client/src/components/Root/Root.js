import React from "react";
import styled from "styled-components";
import Channels from "./Channels";
import Topics from "./Topics";
import ChannelDetail from "./ChannelDetail";
import io from 'socket.io-client';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Channel from "./Channel";

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
const serverUrl = "http://localhost:8989/";
export const socket = io(serverUrl);

const Root = () => {

  return <Wrapper>
    <Container>
      <Router>
        <Content>
          <Link to="/">Home</Link>
          { " " }
          <Link style={{float: 'right'}} to="/channel">New Channel</Link>
          <Switch>
            <Route path="/channel/:id" children={<ChannelDetail/>}/>
            <Route path="/channel" children={<Channel/>}/>
            <Route path="/" children={<Channels/>}>
            </Route>
          </Switch>
        </Content>
      </Router>
      <Sidebar>
        Recent Topics
        <Topics/>
      </Sidebar>
    </Container>
  </Wrapper>;
};

export default Root;