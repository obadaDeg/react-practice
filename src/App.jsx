import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <main className="h-screen flex gap-8">
      <SideBar />
      <MainContent />
    </main>
  );
}

export default App;
