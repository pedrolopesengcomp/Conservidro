import {Link} from 'react-router-dom'


function Footer({SrcLogo}){

    return(
        <footer className="w-full h-80 flex direction-center items-center justify-center flex-col bg-black text-white">
            <header className="h-1/3 flex items-center justify-center">
                <h3 className="text-2xl pt-16">Conservidro</h3>
            </header>
            <div className="w-6/12 h-2/3 flex justify-center items-center">
                <img src={SrcLogo} className="shrink size-40"></img>
                <div className="w-1/2 grow flex flex-col items-end grow">
                    <h4 className='my-8 text-xl'>Navegue</h4>
                    <ul className="list-none flex flex-col items-end">
                        <li className="list-none">
                            <Link to="/sobre-nos" className="FooterLink">Sobre nós</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/servicos" className="FooterLink">Serviços</Link>
                        </li>
                        <li className="list-none">
                            <Link to="/contato" className="FooterLink">Contato</Link>
                        </li>
                    </ul>
                    <hr></hr>
                    <address>juniorlife999@gmail.com</address>
                </div>
            </div>
        </footer>
    )

}

export default Footer;