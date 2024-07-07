import Challenge from "./components/Challenge.jsx";
import Player from "./components/Player.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Challenge title='easy' timer={1} />
        <Challenge title='medium' timer={5} />
        <Challenge title='intermediate' timer={7} />
        <Challenge title='pro' timer={15} />
      </div>
    </>
  );
}

export default App;
