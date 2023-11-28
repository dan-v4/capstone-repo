import './App.css';
import Window from './components/Window';
import ProgramIcon from './components/ProgramIcon';
import GenContent from './components/GenContent';
import ArtistContent from './Content/ArtistContent';
import ExhibitInfo from './components/ExhibitInfo';

function App() {
  return (
    <div className="App">
      <ProgramIcon program_name={'monet.exe'} program_id={'di'} initialX = {2} initialY={84}></ProgramIcon>
      <GenContent initialX={2} initialY={3  } ></GenContent>
      <Window id={'di'} window_text={'Monet'} windowWidth={800} windowHeight={300} initialX = {47} initialY={30} closeable={true} content={<ArtistContent window_height={300}/>}></Window>
      <Window id={'info'} window_text={'hi'} windowWidth={900} windowHeight={360}  initialX = {49}  initialY={4} closeable={false} content={<ExhibitInfo/>}></Window>
    </div>
  );
}

export default App;
