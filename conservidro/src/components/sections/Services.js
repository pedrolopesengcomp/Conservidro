import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Background from "../../images/backgroundHome.png";
import Logo from "../../images/Logo.png";

import { FcShipped } from "react-icons/fc";

function Services(){

    const shipped = <FcShipped className="size-40"></FcShipped>

    return(
        <div className="relative" id="services">
            <List
                title="Serviços prestados"
                backgroundColor="#52a2a1"
                src={[
                    {src:shipped,txt:"Portas e janelas - BLINDEX", bgColor:"#53a6a5"},
                    {src:shipped,txt:"Box de banheiro", bgColor:"#53a6a5"},
                    {txt:"Cortina de vidro", bgColor:"#53a6a5"},
                    {txt:"Esquadria de alumínio", bgColor:"#53a6a5"}]}
                    direction="row"
                    size={200}
                    type="card"
                    rounded="0"
                    reOrganize={0}
            ></List>
            
        </div>
    )
}

export default Services;