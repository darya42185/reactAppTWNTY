import Header from "./components/header/header";
import SolarPanelsList from "./components/solar-panel-list/solar-panel-list";
import Testa from "./components/test/test";
import TimeTest from "./components/test/timetest";

const App = () => {
  return (
    <div className="App">
      <Header />
      <SolarPanelsList />
      {/*     <Testa /> */}
      {/*    <TimeTest /> */}
    </div>
  );
};

export default App;
