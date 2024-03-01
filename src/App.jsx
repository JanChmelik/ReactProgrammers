import { useState } from "react";
import "./App.css";
//components
import Toggler from "./Components/Viewtoggler/Viewtoggler";

function App() {
  //
  //#region PageViewToggler
  const [activeView, setActiveView] = useState(0);
  function handleToggle(e) {
    // calcVolume();
    switch (e.target.name) {
      case "list": {
        setActiveView(1);
        break;
      }
      case "form": {
        setActiveView(2);
        break;
      }
      default: {
        setActiveView(1);
        break;
      }
    }
  }
  //#endregion PageViewToggler
  return (
    <div className="App">
      <h2>Your app for handling projects</h2> <h3>Toggle view</h3>
      <Toggler togglePageView={handleToggle} />
      {activeView === 1 && <>List</>}
      {activeView === 2 && <>Form</>}
    </div>
  );
}

export default App;
