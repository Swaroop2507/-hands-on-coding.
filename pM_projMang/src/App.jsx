import NewProject from "./componenets/NewProject";
import SideBar from "./componenets/SideBar";

function App() {
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar/>
      <NewProject/>
    </main>
  );
}

export default App;
