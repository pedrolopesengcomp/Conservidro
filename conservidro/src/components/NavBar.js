import {Link} from 'react-router-dom'

import Style from "../style/navBarStyle.css";
import Logo from "../images/Logo.png";
import styled from "styled-components";

function NavBar(){
    var $navbar = document.getElementsByClassName("navBar");
    var initialPosition = window.scrollY;
   

    window.addEventListener("scroll", ()=>{
        var opacity;
        if(window.scrollY/100 < 1){
            opacity = window.scrollY/100;
        }
        else{
            opacity = 1;
        }
        $navbar[0].style.backgroundColor = `rgba(16,16,16,${opacity})`;

        if(window.scrollY > 320){
            if(initialPosition > window.scrollY){
                $navbar[0].classList.add('show');
            }
            else{
                $navbar[0].classList.remove('show');
            }

            initialPosition = window.scrollY;
        }
  })

    return(
        <header>
            <nav className="navBar show">
                <ul className="navBarItens">
                    <Link to="/Conservidro/"><img className="px-100" src={Logo}></img></Link>
                    <div className="navBarContentLinks">
                        <li className="links ZingRust">
                            <Link to="/Conservidro/sobre-nos">Saiba mais</Link>
                        </li>
                        <li className="links">
                            <Link to="/Conservidro//servicos">Serviços</Link>
                        </li>
                        <li className="links">
                            <Link to="/Conservidro/contato">Contato</Link>
                        </li>
                    </div>
                </ul>
            </nav>
        </header>
    )
}

export default NavBar;