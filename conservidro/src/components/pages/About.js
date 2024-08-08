import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Background from "../../images/backgroundAbout.png";
import Logo from "../../images/Logo.png";

function About(){
    return(
        <div className="relative" size="5/6" >
            <Principal title="Somos uma empresa confiavel" 
            size="h-screen" 
            background={Background}
            ></Principal>
            <List 
            title="Nossa historia"
            src={[
                {txt:"Atendimento facilitado", bgColor:"#52a2a1"},
                {txt:"Atendimento facilitado", bgColor:"#52a2a1"},
                {txt:"Atendimento facilitado", bgColor:"#52a2a1"},
                {txt:"Atendimento facilitado", bgColor:"#52a2a1"},
                {txt:"Atendimento facilitado", bgColor:"#52a2a1"}
                
            ]} direction="col"></List>
            <Footer></Footer>
        </div>
    )
}

export default About;