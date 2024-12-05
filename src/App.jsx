import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title={"easy"} targetTime={1}/>
        <TimerChallenge title={"not easy"} targetTime={5}/>
        <TimerChallenge title={"getting hard"} targetTime={10}/>
        <TimerChallenge title={"Pros only"} targetTime={15}/>
      </div>
    </>
  );
}

export default App;
