import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Pages/Home";
import Header from "./components/Header";
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import Footer from "./components/Footer";

const MyContext = createContext()

function App() {
  const[countryList, setCountryList] = useState([]);
  const[selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    getCountry("https://countriesnow.space/api/v0.1/countries");
  }, []);

  const getCountry = async (url)=>{
    const responsive = await axios.get(url).then((res)=>{
      setCountryList(res.data.data);
      console.log(res.data.data);
    });
  }
  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry
  }
    return(

      <BrowserRouter>
      <MyContext.Provider value={values}>
      <Header />  
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
          </Route>
        </Routes>
        <Footer/>
      </MyContext.Provider>

      </BrowserRouter>
  );
}

export default App;

export { MyContext };