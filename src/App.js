import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Homepage from './Pages/Homepage/Homepage'
import Layout from 'Pages/Layout/Layaout';
import ChiSiamo from 'Pages/ChiSiamo/ChiSiamo';
import Discipline from 'Pages/Discipline/Discipline';
import Articoli from 'Pages/Articoli/Articoli';
import BibliografiaEFilmografia from 'Pages/BibliografiaEFilmografia/BibliografiaEFilmografia';
import Corsi from 'Pages/Corsi/Corsi';
import Article from 'Pages/Article/Article';

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Homepage />} />
            <Route element={<Layout />}>
                <Route path='/chi_siamo' element={<ChiSiamo />} />
                <Route path='/discipline' element={<Discipline />} />
                <Route path='/articoli' element={<Articoli />} />
                <Route path='/bibliografia_e_filmografia' element={<BibliografiaEFilmografia />} />
                <Route path='/chi_siamo' element={<Corsi />} />
                <Route path='/articolo' element={<Article />} />
            </Route>
        </Routes>
    </BrowserRouter>    
  );
}

