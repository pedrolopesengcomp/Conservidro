import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundHome.png";

import { FcPhone } from "react-icons/fc";
import { FaWhatsapp } from "react-icons/fa";
import { ImMail } from "react-icons/im";
import { FaSquareInstagram } from "react-icons/fa6";

function Contact(){
    const phone = <FcPhone className="size-24" />;
    const wpp = <FaWhatsapp className="size-24"/>;
    const mail = <ImMail className="size-24"/>
    const instagram = <a href="https://www.instagram.com/conservidro/"><FaSquareInstagram className="size-24"/></a>


    return(
        
        <div className="relative" id="contact">
            <List 
            width="full"
            backgroundColor={"#6EACDA"}
            title="Entre em contato"
            src={[
                {src:mail,txt:"juniorlife999@gmail.com", bgColor:"#52a2a1"},
                {src:wpp,txt:"(31) 9 82306802", bgColor:"#52a2a1"},
                {src: instagram, txt:"@conservidro", bgColor:"#52a2a1"}
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