import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ChannelDataProvider } from "./context/channelContext";
import ChannelPage from "./pages/ChannelPage";

import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import { Main } from "./components/Styles";
import VideoPage from "./pages/VideoPage";
import Header from "./components/Header";
import MobileMenu from "./components/MobileMenu";
import { HomeVideosProvider } from "./context/homeVideoContext";


require('dotenv').config()

function App() {
  return (
    <div className="app">
      <ChannelDataProvider>
        <HomeVideosProvider>
          <Router>
            <Header />
            <Main>
              <SideBar />
              <MobileMenu />
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route
                  path="/channel/:channelID"
                  exact
                  component={ChannelPage}
                />
                <Route path="/video/:videoID" component={VideoPage} />
              </Switch>
            </Main>
          </Router>
        </HomeVideosProvider>
      </ChannelDataProvider>
    </div>
  );
}

export default App;
