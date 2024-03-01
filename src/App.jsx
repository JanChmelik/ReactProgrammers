import { useState, useEffect } from "react";
import "./App.css";
// data
import rawList from "./Data/programmersList.json";
//components
import Toggler from "./Components/Viewtoggler/Viewtoggler";
import List from "./Components/List/List";
import AddForm from "./Components/AddForm/AddForm";
import ProjectView from "./Components/ProjectView/ProjectForm";
//
function App() {
  //
  //#region PageViewToggler
  const [activeView, setActiveView] = useState(0);
  function handleToggle(e) {
    // calcpower();
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
    sizing: "",
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
      position: "",
    };
    setNewcoder(resetcoder);
  };
  //#endregion AddForm
  //
  //#region ProjectView
  const [wokrCalculated, setWorkCalculated] = useState(0);
  const [projectDesign, setProjectDesign] = useState({
    length: "",
    days: "",
  });
  //#region claculating ManPower
  const [manPower, setmanPower] = useState(0);
  function calcPower() {
    let power = 0;
    for (let i = 0; i < coderList.length; i++) {
      const element = coderList[i];
      if (element.position === "Junior") {
        power += 10;
      } else if (element.position === "Senior") {
        power += 20;
      } else {
        power += 0;
      }
    }
    setmanPower(power);
  }
  //#endregion claculating ManPower
  //
  const calcProject = (e) => {
    let temp = { ...projectDesign, [e.target.id]: e.target.value };
    setProjectDesign(temp);
    let work = parseInt(projectDesign.length) / parseInt(projectDesign.days);
    setWorkCalculated(work);
    validation(wokrCalculated, manPower);
  };
  //
  //#region Validation
  const [validationResult, setValidationResult] = useState(false);
  function validation(work, power) {
    if (work != NaN && work != 0) {
      setValidationResult(work >= power ? true : false);
    } else {
      setValidationResult(false);
    }
  }
  //#endregion Validation
  //
  //#region Reset ProjectView
  const handleReset = () => {
    const tempProject = {
      ...projectDesign,
      length: "",
      days: "",
    };
    setProjectDesign(tempProject);
    setWorkCalculated(0);
    validation(wokrCalculated, manPower);
  };
  //#endregion Reset ProjectView
  //
  //#endregion ProjectView

  //
  return (
    <div className="App">
      <h2>Your app for handling projects</h2> <h3>Toggle view</h3>
      <Toggler togglePageView={handleToggle} />
      {activeView === 1 && (
        <>
          <h3>Your team</h3>
          <List inList={coderList} handleDelete={handlecoderDelete} />
          <AddForm
            data={newcoder}
            handleChange={handleCoderChange}
            addcoder={handleAdd}
          />
        </>
      )}
      {activeView === 2 && (
        <>
          <ProjectView
            inModel={projectDesign}
            handleChange={calcProject}
            validation={validationResult}
            handleResetClick={handleReset}
          />
        </>
      )}
    </div>
  );
}

export default App;
