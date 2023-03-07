import './header.css'
import logo from 'Assets/img/ice-indaco.png'
import NavBar from './components/NavBar/NavBar'

export default function Header() {
    
    return (
        <header>  
            <NavBar />
            <div className="title-header">
                <h1>Arti Venture</h1>
            </div>
            <div>
                <img className="logo-header" alt='logo' src={logo} />
            </div>
        </header>
    )
}