import React from 'react';
import {Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home/Home";
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Directions} from "./pages/Directions/Directions";
import {Cargo} from "./pages/Cargo/Cargo";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/directions' element={<Directions/>}/>
        <Route path='/cargo' element={<Cargo/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
