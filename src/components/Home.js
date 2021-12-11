import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';

function App() {
    return (
      <div className="App"> 
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
              Hello World! <br/>
              Edit <code>src/App.js</code> and save to reload. <br/>
              Edit wow 
              
              <br/>
  
          </p>        
          <Button/>
          <Greet name ="Rey" heroname="Reyflector">
            <Message/>
          </Greet>
          <Greet name ={Hello()} heroname="testaman"/>
          
  
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 
          </a>
        </header>
      </div>
    );
  }
  
  export default App;
  