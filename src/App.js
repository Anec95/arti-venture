import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Homepage2/Homepage2'


export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
        </Routes>
    </BrowserRouter>    
  );
}

