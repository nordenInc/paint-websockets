import "./App.css";
import Canvas from "./components/Canvas";
import Settingbar from "./components/Settingbar";
import Toolbar from "./components/Toolbar";
import "./styles/app.scss";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/:id">
            <Toolbar />
            <Settingbar />
            <Canvas />
          </Route>
          <Redirect to={`f${(+new Date()).toString(16)}`} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
