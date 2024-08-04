import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Background from "../../images/backgroundHome.png";
import Logo from "../../images/Logo.png";

import { BsCashStack } from "react-icons/bs";

function Home(){
    return(
        <div className="relative top-24">
            <Principal title="Referência e qualidade" subtitle="Somos conhecidos por cordialidade" background={Background}></Principal>
            <List backgroundColor={"#468a89"} 
            src={[
                {src:"", txt:"Vantagem 1"}, 
                {src:"", txt:"Vantagem 2"}, 
                {src:"", txt:"Vantagem 3"}, 
                {src:"", txt:"Vantagem 4"}, 
                {src:"", txt:"Vantagem 5"}
                ]} 
                size={100}></List>
            <Content Background="#52a2a1" id={1}
                     title="Primeiro conteudo"
                     text="Promocao sobre como e bacana"
                     direction="col"></Content>
            <Content title="Segundo" 
            text="ieaieaieieaie" 
            Background="#6EACDA"
            direction="col"
            ImageSrc={Background}/>
            <Footer></Footer>
        </div>
    )
}

export default Home;