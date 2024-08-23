import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundAbout.png";
import AuxImage from '../../images/aboutUsAuxImage.png';

import { FcCalendar } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";

function About(){

    const calendar = <FcCalendar className="size-24"></FcCalendar>
    const approval = <FcApproval className="size-24"></FcApproval>

    return(
        <div className="relative" size="5/6" id="about" >
            <Content 
                title="Você em primeiro lugar!"
                text={["Nós valorizamos o conforto e a segurança do seu lar. Temos como princípios"]}
                direction="col"
                list={[
                    "Confiabilidade",
                    "Excelência", 
                    "Sustentabilidade"
                ]}
                ImageSrc={AuxImage}
            ></Content>
            <Content 
                title="No mercado desde 2013!"
                text={["Somos uma empresa do grupo vidro clean que se desenvolve mais e mais todos os dias!",
                    "Hoje em dia atendemos mais de"
                ]}
                highlight="3000 clientes!"
                direction="col"
            ></Content>
            
        </div>
    )
}

export default About;