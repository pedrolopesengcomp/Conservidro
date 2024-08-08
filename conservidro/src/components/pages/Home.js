import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";

import Background from "../../images/backgroundHome.png";

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
        <div className="relative top-24">
            <Principal title="Referência e qualidade" subtitle="Somos conhecidos por cordialidade" background={Background} size="h-96"></Principal>
            <List backgroundColor={"#468a89"}
            width="full"
            title="Por que a conservidro"
            src={[
                {src:support, txt:"Atendimento facilitado", bgColor:"#52a2a1"}, 
                {src:calendar, txt:"Compromisso com o prazo", bgColor:"#52a2a1"}, 
                {src:factory, txt:"Produto de qualidade", bgColor:"#52a2a1"}, 
                {src:lock, txt:"Seguro", bgColor:"#52a2a1"}, 
                {src:device, txt:"Atendimento multi dispositivos", bgColor:"#52a2a1"}
                ]} 
                size={100}
                direction="row"
                rounded="full"
                reOrganize={1}></List>
            <Content Background="#52a2a1" id={1}
                     title="Primeiro conteudo"
                     text="Aqui vem os textos simples (geralmente são frases curtas e marcantes)"
                     direction="col"></Content>
            <Content title="Segundo" 
            text="Aqui vem os textos com imagens ao lado, são geralmente ilustrações" 
            Background="#6EACDA"
            direction="col"
            ImageSrc={Background}/>
        </div>
    )
}

export default Home;