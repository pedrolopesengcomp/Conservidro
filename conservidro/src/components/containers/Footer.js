import {Link} from 'react-router-dom'

import Style from '../../style/Footer.css';

function Footer({SrcLogo}){

    return(
        <footer className="pageFooter">
            <header className="pageFooterTitleSpace">
                <h3 className="pageFooterTitle">Cefast Baja</h3>
            </header>
            <div className="pageFooterSpace">
                <img src={SrcLogo}></img>
                <div className="pageFooterContent">
                    <h4>Navegue</h4>
                    <ul>
                        <li className="FooterLi">
                            <Link to="/sobre-nos" className="FooterLink">Sobre nós</Link>
                        </li>
                        <li className="FooterLi">
                            <Link to="/competicao" className="FooterLink">Competição</Link>
                        </li>
                    </ul>
                    <h4>
                        Contato
                    </h4>
                    <hr></hr>
                    <address>cefastbaja@gmail.com</address>
                </div>
            </div>
        </footer>
    )

}

export default Footer;