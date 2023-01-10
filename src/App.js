import HomePage from './components/HomePage';
import Header from './components/Header'
import CountryPage from './components/CountryPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import "./App.css"

function App() {
  return (
    <div className="App">
      <Header></Header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/CountryPage' element={<CountryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
