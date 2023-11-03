import './App.css';
import Window from './components/Window';
import ProgramIcon from './components/ProgramIcon';
import GenContent from './components/GenContent';

function App() {
  return (
    <div className="App">
      <ProgramIcon program_name={'monet.exe'} program_id={'di'} initialX = {90} initialY={85}></ProgramIcon>
      <GenContent initialX={3} initialY={8}></GenContent>
      <Window id={'di'} window_text={'Monet'} windowWidth={800} windowHeight={300} initialX = {2} initialY={65} closeable={true}></Window>
      <Window id={'info'} window_text={'hi'} windowWidth={800} windowHeight={300}  initialX = {63}  initialY={6} closeable={false}></Window>
    </div>
  );
}

export default App;
