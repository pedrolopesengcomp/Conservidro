import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Style from "../../style/pageStyle.css";
import Background from "../../images/backgroundHome.png"

import { BsCashStack } from "react-icons/bs";

function Home(){
    return(
        <>
            <Principal title="Referência e qualidade" subtitle="Somos conhecidos por cordialidade" background={Background}></Principal>
            <List backgroundColor={"#6EACDA"} src={[{src:"", txt:"lmcasl"}, {src:"", txt:"Pedro"}, {src:"", txt:"Pedro"}, {src:"", txt:"Pedro"}, {src:"", txt:"Pedro"}]} size={100}></List>
            <Content title="blablabla" text="lorem bla blabblalblavladlfkjsdfksadcmsdclsdlfksda" ImageSrc={Background} ></Content>
            <Content title="Segundo" text="ieaieaieieaie" Background="#6EACDA"/>
            <Footer></Footer>
        </>
    )
}

export default Home;