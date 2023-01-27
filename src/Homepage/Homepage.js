import React from 'react'
import './homepage.css'
import {NavLink} from "react-router-dom"

export default function Homepage() {
    return (
        <main className='homepage-main'>
            <section className='left-section'>
                <div className='menu-element one'>
                    <div className='contact-and-biography menu-container'>
                        <p className='title contact-title'>C<br/>O<br/>N<br/>T<br/>A<br/>T<br/>T<br/>I</p>
                        <div className='menu-list'>
                            <p>Bio</p>
                            <p>Contattaci</p>
                        </div>
                    </div>
                </div>
                <div className='menu-element two'>
                    <div className='practices menu-container'>                        
                        <p className='title practices-title'>P<br/>R<br/>A<br/>T<br/>I<br/>C<br/>H<br/>E</p>
                        <div className='menu-list'>
                            <p>Pratica 1</p>
                            <p>Pratica 2</p>
                            <p>Pratica 3</p>
                            <p>Pratica 4</p>
                            <p>Pratica 5</p>
                            <p>Pratica 6</p>
                            <p>Pratica 7</p>
                        </div>
                    </div>
                </div>
                <div className='menu-element three'>
                    <div className='activities menu-container'>
                        <p className='title activities-title'>A<br/>T<br/>T<br/>I<br/>V<br/>I<br/>T<br/>À</p>
                        <div className='menu-list'>
                            <p>Attività 1</p>
                            <p>Attività 2</p>
                            <p>Attività 3</p>
                            <p>Attività 4</p>
                            <p>Attività 5</p>
                            <p>Attività 6</p>
                            <p>Attività 7</p>
                        </div>
                    </div>
                </div>
                <div className='menu-element four'>
                    <div className='courses menu-container'>
                        <p className='title courses-title'>C<br/>O<br/>R<br/>S<br/>I</p>
                        <div className='menu-list'>
                            <p>Corso 1</p>
                            <p>Corso 2</p>
                            <p>Corso 3</p>
                            <p>Corso 4</p>
                            <p>Corso 5</p>
                            <p>Corso 6</p>
                            <p>Corso 7</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='middle-section'>
                <h1 className='name-association'>Restauro del Mistero</h1>
                <h3 className='mission'>Mission</h3>
            </section>
            <section className='right-section'>
                <img className='logo' src='./images/restauro-logo.png' alt='restauro del mistero logo' />
            </section>
        </main>
    )
}