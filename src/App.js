import Header from "./components/Header";
import { useState } from 'react';
import Routing from "./components/Routing";
import { useEffect } from 'react';
import { getItems } from "./redux/productsSlice";
import { useDispatch } from 'react-redux';

const App = () => {    
  return (
    <div class="wrapper">
      <Header />
      <Routing/>
    </div>
  );
};

export default App;
