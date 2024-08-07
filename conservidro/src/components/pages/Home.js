import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Background from "../../images/backgroundHome.png";
import Logo from "../../images/Logo.png";

import { BsCalendar2CheckFill, BsCash } from "react-icons/bs";

import { BsCashStack } from "react-icons/bs";

function Home(){
    const calendar = <BsCalendar2CheckFill></BsCalendar2CheckFill>
    const cash = <BsCashStack></BsCashStack>


    return(
        <div className="relative top-24">
            <Principal title="Referência e qualidade" subtitle="Somos conhecidos por cordialidade" background={Background}></Principal>
            <List backgroundColor={"#468a89"} 
            src={[
                {src:{BsCalendar2CheckFill}, txt:"Vantagem 1"}, 
                {src:{BsCash}, txt:"Vantagem 2"}, 
                {src:"aooba", txt:"Vantagem 3"}, 
                {src:"", txt:"Vantagem 4"}, 
                {src:"", txt:"Vantagem 5"}
                ]} 
                size={100}></List>
            <Content Background="#52a2a1" id={1}
                     title="Primeiro conteudo"
                     text="Aqui vem os textos simples (geralmente são frases curtas e marcantes)"
                     direction="col"></Content>
            <Content title="Segundo" 
            text="Aqui vem os textos com imagens ao lado, são geralmente ilustrações" 
            Background="#6EACDA"
            direction="col"
            ImageSrc={Background}/>
            <Footer></Footer>
        </div>
    )
}

export default Home;