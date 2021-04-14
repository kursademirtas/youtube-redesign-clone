import Header from "./components/Header";
import SideBar from "./components/SideBar";
import HomePage from "./pages/HomePage";
import { Row } from './components/Styles';

function App() {
  return (
    <div className="App">
      <Header />
      <Row>
        <SideBar />
        <HomePage />
      </Row>
    </div>
  );
}

export default App;
