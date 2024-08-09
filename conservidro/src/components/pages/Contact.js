import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundHome.png";

import { FcPhone } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";

function Contact(){
    const phone = <FcPhone className="size-24" />;
    const wpp = <FaWhatsapp className="size-24"/>;

    return(
        
        <div className="relative top-24">
            <Content Background="#52a2a1" id={1}
                title="Diga como funciona o contato"
                text="Aqui vem os textos simples (geralmente são frases curtas e marcantes)"
                direction="col">
            </Content>
            <List 
            width="full"
            backgroundColor={"#6EACDA"}
            title="Entre em contato"
            src={[
                {src:phone,txt:"Opcao de contato", bgColor:"#52a2a1"},
                {src:wpp,txt:"Opcao de contato", bgColor:"#52a2a1"},
                {txt:"Opcao de contato", bgColor:"#52a2a1"}
                
            ]}
            reOrganize={1}
            size={100} 
            direction="row"
            ImageAux={""}
            rounded="rounded-full">
            </List>

            
            
        </div>
    )
}

export default Contact;