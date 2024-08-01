import {Link} from 'react-router-dom';

import Logo from "../images/Logo.png";
import styled from "styled-components";

import {useState} from 'react';

function NavBar(){
    var initialPosition = window.scrollY;


    return(
        <header className='w-screen h-24 fixed bg-black z-40'>
            <nav className="flex h-full w-full justify-center items-center">
                <ul className="flex h-full w-11/12">
                    <div className='h-full w-1/3'>
                        <Link to="/Conservidro/"><img className="flex-none h-full" src={Logo}></img></Link>
                    </div>
                    <div className="flex-grow flex justify-end items-center
                    w-2/3 flex-row">
                        <li className="text-white mx-4 text-center">
                            <Link to="/Conservidro/sobre-nos" className="px-4 py-4 hover:text-black hover:bg-blue-400 rounded-lg transition-all">Saiba mais</Link>
                        </li>
                        <li className="text-white mx-4 text-center">
                            <Link to="/Conservidro/servicos" className="px-4 py-4 hover:text-black hover:bg-blue-400 rounded-lg transition-all">Serviços</Link>
                        </li>
                        <li className="text-white mx-4 text-center">
                            <Link to="/Conservidro/contato" className="px-4 py-4 hover:text-black hover:bg-blue-400 rounded-lg transition-all">Contato</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;