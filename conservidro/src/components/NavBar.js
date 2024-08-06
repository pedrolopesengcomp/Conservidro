import {Link} from 'react-router-dom';

import Logo from "../images/Logo.png";
import styled from "styled-components";

import { LuMenu } from "react-icons/lu";

import React, {useState, useEffect} from 'react';

function NavBar(){

    const [navHeight, setNavHeight] = useState(0);

    function generateHr(){
        if(window.innerWidth<728){
            return(<hr className="my-4 w-24"/>);
        }
        else{
            return (<br></br>)
        }
    }

    function toggleNavBar(){
        let navBar = document.getElementById("navBar");
        if(navHeight == 0){
            navBar.classList.add("top-24");
            setNavHeight(1);
        }
        else{
            navBar.classList.remove("top-24");
            setNavHeight(0);
        }
    }



    return(
        <header className={`w-screen h-24 fixed bg-black z-40`}>
            <nav className="flex h-full w-full justify-center items-center">
                <ul className="flex h-full md:w-11/12 w-full md:flex-row flex-col items-center">
                    <div className='md:h-full h-1/3 w-full md:w-1/3  m-auto flex justify-around items-center'>
                        <Link to="/Conservidro/"><img className="flex-none size-24" src={Logo}></img></Link>
                        
                
                        <LuMenu color="white" className='size-8 cursor-pointer md:hidden' onClick={()=>{
                                toggleNavBar();
                        }}/>
                    </div>
                    
                    <div id="navBar" className={`z-[-1] md:z-[1] flex fixed md:relative bg-black h-80 -top-[400px] md:top-0
                    md:flex flex-grow md:justify-end justify-around items-center
                    md:w-2/3 w-full md:h-full flex-row md:flex-row flex-col 
                    transition-all`}>
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