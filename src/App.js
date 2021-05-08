import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import ChannelPage from "./pages/ChannelPage";
import { Row } from "./components/Styles";
import { ChannelDataProvider } from "./context/channelContext";
import VideoPage from "./pages/VideoPage";

function App() {
  return (
    <div className="App">
      <ChannelDataProvider>
        <Header />
        <Router>
          <Row>
              <SideBar />
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/channel/:channelID' exact component={ChannelPage} />
                <Route path='/video/:videoID' component={VideoPage}/>
            </Switch>
          </Row>
        </Router>
      </ChannelDataProvider>
    </div>
  );
}

export default App;
