import './App.css';
import { Container, } from 'react-bootstrap';
import { Datacontext } from './data/context';
import Header from './components/Header';
import ContextProvider from './components/ContextProvider';


function App() {
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
