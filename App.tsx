import * as React from "react";
import "./App.css";
import FirstComponent from "./components/FirstComponent";
// tslint:disable-next-line:comment-format
//import { Details } from "./components/NameForm";
import logo from "./logo.svg";
// tslint:disable-next-line:ordered-imports
import NameForm from './components/NameForm';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <FirstComponent />
          <NameForm />
        </p>
      </div>
    );
  }
}

export default App;
