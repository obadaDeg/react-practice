import { useState } from "react";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  const [stateData, setStateData] = useState({
    selectedProjectID: null,
    projects: [],
  });

  function handleNewProject() {
    setStateData((prevData) => ({
      ...prevData,
      selectedProject: undefined,
    }));
  }

  return (
    <main className="h-screen flex gap-8">
      <SideBar handleNewProject={handleNewProject}/>
      <MainContent project={stateData.selectedProject} handleNewProject={handleNewProject}/>
    </main>
  );
}

export default App;
