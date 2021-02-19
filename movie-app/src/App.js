import "./App.css";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Content from "./Components/Content/Content";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navigation></Navigation>
      <Content></Content>
    </div>
  );
}

export default App;
