import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundAbout.png";
import Logo from "../../images/Logo.png";

function About(){
    return(
        <div className="relative top-24" size="5/6" >
            <Principal title="Somos uma empresa confiavel" 
            size="h-96" 
            background={Background}
            ></Principal>
            <List 
            width="full"
            backgroundColor={"#6EACDA"}
            title="Tópico sobre a empresa"
            text="Aqui se explica como foi criada"
            src={[
                {txt:"Item sobre a empresa", bgColor:"#52a2a1"},
                {txt:"Item sobre a empresa", bgColor:"#52a2a1"},
                {txt:"Item sobre a empresa", bgColor:"#52a2a1"}
                
            ]}
            reOrganize={0}
            size={150} 
            direction="col"
            ImageAux={""}
            rounded="full"
            ></List>
        </div>
    )
}

export default About;