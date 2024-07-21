import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route  path='/read' element={<Read/>} />
        <Route  path='/' element={<Create/>} />
        <Route path='/edit/:id' element={<Update/>} />
        <Route  />
      </Routes>
    </div>
  );
}

export default App;
