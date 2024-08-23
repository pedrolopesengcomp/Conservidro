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

function Home(){

    const support = <FcOnlineSupport className="size-20 m-auto my-auto"></FcOnlineSupport>
    const calendar = <FcPlanner className="size-20 m-auto my-auto"></FcPlanner>
    const factory = <FcFactory className="size-20"></FcFactory>
    const lock = <FcLock className="size-20"></FcLock>
    const device = <FcMultipleDevices className="size-20"></FcMultipleDevices>

    

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
                {src:support, txt:"Atendimento facilitado", bgColor:"#52a2a1"}, 
                {src:calendar, txt:"Compromisso com o prazo", bgColor:"#52a2a1"}, 
                {src:factory, txt:"Produto de qualidade", bgColor:"#52a2a1"}, 
                {src:lock, txt:"Seguro", bgColor:"#52a2a1"}, 
                {src:device, txt:"Atendimento multi dispositivos", bgColor:"#52a2a1"}
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
            backgroundColor={"#c2c2c2"}
            width="full"
            color="black"
            title="Garantia e disponibilidade"
            src={[
                {src:support, txt:"Peças de alta qualidade", bgColor:"#c2c2c2"},
                {src:support, txt:"Orçamento imediato", bgColor:"#52a2a1"}, 
                {src:calendar, txt:"Avaliação online facilitada", bgColor:"#52a2a1"}
                ]} 
                size={70}
                direction="row"
                rounded="rounded-full"
                reOrganize={1}></List>  
        </div>
    )
}

export default Home;