import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />  
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
