import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundHome.png";

function Contact(){
    return(
        <body>
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
                {txt:"Opcao de contato", bgColor:"#52a2a1"},
                {txt:"Opcao de contato", bgColor:"#52a2a1"},
                {txt:"Opcao de contato", bgColor:"#52a2a1"}
                
            ]}
            reOrganize={0}
            size={100} 
            direction="col"
            ImageAux={""}
            rounded="rounded-full">
            </List>
        </body>
    )
}

export default Contact;