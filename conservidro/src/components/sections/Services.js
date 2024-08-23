import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Background from "../../images/backgroundHome.png";
import Logo from "../../images/Logo.png";
import Window from "../../images/window.png"
import Bathroom from "../../images/bathroom.png"
import WindowCourtain from "../../images/windowcourtain.png"
import Aluminium from '../../images/esquadriaDeAluminio.png'

import { FcShipped } from "react-icons/fc";

function Services(){

    const shipped = <FcShipped className="size-40"></FcShipped>
    const window = <img src={Window}/>
    const bathroom = <img src={Bathroom} />
    const windowCourtain = <img src={WindowCourtain} />
    const aluminium = <img src={Aluminium} />
    

    return(
        <div className="relative" id="services">
            <List
                title="Serviços prestados"
                backgroundColor="#52a2a1"
                src={[
                    {src:window,txt:"Portas e janelas - BLINDEX", bgColor:"#4DBDBC"},
                    {src:bathroom,txt:"Box de banheiro", bgColor:"#4DBDBC"},
                    {src:windowCourtain,txt:"Cortina de vidro", bgColor:"#4DBDBC"},
                    {src:aluminium,txt:"Esquadria de alumínio", bgColor:"#4DBDBC"}]}
                    direction="row"
                    size={200}
                    color="white"
                    type="card"
                    rounded="0"
                    reOrganize={0}
            ></List>
            
        </div>
    )
}

export default Services;