import { useState, useEffect } from "react";
import "./App.css";
// data
import rawList from "./Data/programmersList.json";
//components
import Toggler from "./Components/Viewtoggler/Viewtoggler";
import List from "./Components/List/List";
import AddForm from "./Components/AddForm/AddForm";
//
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
  //
  //#region List
  const [coderList, setcoderList] = useState(rawList.coders);
  const [newcoder, setNewcoder] = useState({
    id:
      coderList.length > 0
        ? Math.max(...coderList.map((coder) => coder.id)) + 1
        : 1,
    name: "",
    size: "",
  });
  const handlecoderDelete = (idToDelete) => {
    setcoderList(coderList.filter((coder) => coder.id !== idToDelete));
  };
  //#endregion List
  //
  //#region AddForm
  const handleCoderChange = (e) => {
    setNewcoder({ ...newcoder, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    console.log(newcoder);
  }, [newcoder]);
  const handleAdd = (newcoder) => {
    setcoderList((coderList) => {
      return [...coderList, newcoder];
    });
    const newCradId = newcoder.id + 1;
    const resetcoder = {
      id: newCradId,
      name: "",
      size: "",
    };
    setNewcoder(resetcoder);
  };
  //#endregion AddForm
  //
  return (
    <div className="App">
      <h2>Your app for handling projects</h2> <h3>Toggle view</h3>
      <Toggler togglePageView={handleToggle} />
      {activeView === 1 && (
        <>
          <List inList={coderList} handleDelete={handlecoderDelete} />
          <AddForm
            data={newcoder}
            handleChange={handleCoderChange}
            addcoder={handleAdd}
          />
        </>
      )}
      {activeView === 2 && <>Form</>}
    </div>
  );
}

export default App;
