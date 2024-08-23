import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

//Paginas importadas
import Services from './Services';
import Contact from './Contact';
import About from './About';

import Background from "../../images/backgroundHome.png";
import WindowBackground from "../../images/windowBackground.png";

import { FcOnlineSupport} from "react-icons/fc";
import { FcPlanner } from "react-icons/fc";
import { FcFactory } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcMultipleDevices } from "react-icons/fc";
import { FcClock } from "react-icons/fc";
import { FcCloseUpMode } from "react-icons/fc";
import { FcApproval } from "react-icons/fc";


function Home(){

    const support = <FcOnlineSupport className="size-20 m-auto my-auto"></FcOnlineSupport>
    const calendar = <FcPlanner className="size-20 m-auto my-auto"></FcPlanner>
    const factory = <FcFactory className="size-20"></FcFactory>
    const lock = <FcLock className="size-20"></FcLock>
    const device = <FcMultipleDevices className="size-20"></FcMultipleDevices>
    const clock = <FcClock className="size-20" color="black"/>
    const flower = <FcCloseUpMode className="size-20" />
    const approval = <FcApproval className="size-20"/>;

    

    return(
        <div className="relative" id="home">
            <Principal title="Excelência em manutenção corretiva e preventiva" 
            subtitle="Invista na estética e segurança de seu lar!" 
            background={Background} size="h-[36rem]"></Principal>
            <List     
            backgroundColor={"#468a89"}
            backgroundImage={WindowBackground}
            width="full"
            color="white"
            title="A qualidade em destaque!"
            src={[
                {src:support, txt:"Profissionais qualificados", bgColor:"#52a2a1"}, 
                {src:clock, txt:"Atendimento imediato", bgColor:"#52a2a1"}, 
                {src:flower, txt:"Valorizamos seu lar", bgColor:"#52a2a1"}, 
                {src:lock, txt:"Seguro", bgColor:"#52a2a1"}
                ]} 
                size={100}
                direction="row"
                rounded="rounded-full"
                reOrganize={1}></List>
            <Content Background="white" id={1}
                     title="Por que a manutenção corretiva?"
                     text={["Manter seus vidros residenciais em perfeito estado é essencial para garantir a segurança e durabilidade e estética de seu lar!"]}
                     direction="col"></Content>
            
            <List     
            backgroundColor={"#6EACDA"}
            width="6/12"
            color="black"
            title="Garantia e disponibilidade"
            text="Buscamos sempre realizar sua demanda da forma mais prática e viável possível, sempre priozirando o seu conforto e a sua privacidade dentro de seu lar!"
            src={[
                {src:approval, txt:"Empresa 100% confiável pelo Reclame Aqui", bgColor:"white"}
                ]} 
                size={70}
                direction="row"
                rounded="rounded-full"
                reOrganize={1}></List>  
        </div>
    )
}

export default Home;