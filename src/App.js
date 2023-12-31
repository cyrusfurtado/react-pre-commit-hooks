import logo from './logo.svg';
import './App.css';
import MyComponent from './my-component';

function App() {
  // const password = 'mylocalpassowrd'; // pragma: allowlist secret
  // console.log(password);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <MyComponent>Hi there from my component</MyComponent>
    </div>
  );
}

export default App;
