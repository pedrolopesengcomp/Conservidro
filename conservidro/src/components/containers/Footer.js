import {Link} from 'react-router-dom'


function Footer({SrcLogo}){

    return(
        <footer className="w-full h-80 flex direction-center items-center flex-col bg-black text-white">
            <header className="h-1/3">
                <h3 className="pageFooterTitle">Conservidro</h3>
            </header>
            <div className="w-11/12 h-2/3 justify-center items-center">
                <img src={SrcLogo}></img>
                <div className="pageFooterContent">
                    <h4>Navegue</h4>
                    <ul>
                        <li className="FooterLi">
                            <Link to="/sobre-nos" className="FooterLink">Sobre nós</Link>
                        </li>
                        <li className="FooterLi">
                            <Link to="/competicao" className="FooterLink">Serviços</Link>
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