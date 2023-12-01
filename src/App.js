import './App.css';
import { Container, } from 'react-bootstrap';
import { Datacontext } from './data/context';
import Header from './components/Header';
import ContextProvider from './components/ContextProvider';
import data from "./data/movie.json"

function App() {
  console.log(data);
  return (
    <div className="App">
      <Header />
      <Container>
        <Datacontext>
          <ContextProvider />
        </Datacontext>
      </Container>
    </div>
  );
}
export default App;
