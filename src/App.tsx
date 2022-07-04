import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { Directions } from './pages/Directions/Directions';
import { DirectionsItem } from './pages/DirectionItem/DirectionsItem';
import { Cargo } from './pages/Cargo/Cargo';
import { CargoItem } from './pages/CargoItem/CargoItem';
import { Layout } from './components/Layout/Layout';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="directions" element={<Directions />} />
          <Route path="directions/:id" element={<DirectionsItem />} />
          <Route path="cargo" element={<Cargo />} />
          <Route path="cargo/:id" element={<CargoItem />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
