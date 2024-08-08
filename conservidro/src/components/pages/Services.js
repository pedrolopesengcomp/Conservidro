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
        <div className="relative top-24">
            <List
                backgroundColor=""
                src={[
                    {src:shipped,txt:"Serviço 1", bgColor:"#00000"},
                    {txt:"Serviço 2", bgColor:"#00000"},
                    {txt:"Serviço 3", bgColor:"#00000"},
                    {txt:"Serviço 4", bgColor:"#00000"},
                    {txt:"Serviço 5", bgColor:"#00000"},
                    {txt:"Serviço 6", bgColor:"#00000"},
                    {txt:"Serviço 7", bgColor:"#00000"}]}
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