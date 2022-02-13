import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search";
import PeopleList from "./components/People";
import Details from "./components/Details";

function App() {
  const [id, setId] = useState(null);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2 className="App-title">People</h2>
        <Search onDetails={setId} />
        <PeopleList onDetails={setId} />
      </header>
      <section className="App-body">
        <div className="App-body-wrapper">
          <h2 className="App-body-header">
            REDspace React Full Stack Code Challenge
            <small>By STEVE S. SAMSON, stevee.samson@gmail.com</small>
          </h2>
          <div className="App-detail-wrapper">
            <Details id={id} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
