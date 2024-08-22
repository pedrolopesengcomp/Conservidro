import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundAbout.png";
import { FcCalendar } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

function About(){

    const calendar = <FcCalendar className="size-24"></FcCalendar>
    const approval = <FcApproval className="size-24"></FcApproval>

    return(
        <div className="relative" size="5/6" id="about" >
            <Content 
                title="Você em primeiro lugar!"
                text="Nós valorizamos o conforto e a segurança do seu lar. Temos como princípios"
                direction="col"
                list={[
                    "Confiabilidade",
                    "Excelência", 
                    "Sustentabilidade"
                ]}
            ></Content>
            <List 
            width="full"
            backgroundColor={"#6EACDA"}
            title="Tópico sobre a empresa"
            text="Aqui se explica os valores, missão, funcionamento e mais sobre a empresa"
            src={[
                {src:calendar,txt:"Desde xx/xx/xxxx", bgColor:"#52a2a1"},
                {src:approval,txt:"Cerficiados ISO-xxxx", bgColor:"#52a2a1"}
                
            ]}
            reOrganize={0}
            size={150} 
            direction="col"
            ImageAux={""}
            rounded="rounded-full"
            ></List>
        </div>
    )
}

export default About;