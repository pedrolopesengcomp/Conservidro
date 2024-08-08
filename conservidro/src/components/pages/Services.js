import Principal from "../containers/Principal";
import List from "../containers/List"
import Content from "../containers/Content";
import Footer from "../containers/Footer";

import Background from "../../images/backgroundHome.png";
import Logo from "../../images/Logo.png";

function Services(){


    return(
        <div className="relative top-24">
            <List
                backgroundColor=""
                src={[
                    {txt:"Serviço 1", bgColor:"#52a2a1"},
                    {txt:"Serviço 2", bgColor:"#52a2a1"},
                    {txt:"Serviço 3", bgColor:"#52a2a1"},
                    {txt:"Serviço 4", bgColor:"#52a2a1"},
                    {txt:"Serviço 5", bgColor:"#52a2a1"},
                    {txt:"Serviço 6", bgColor:"#52a2a1"},
                    {txt:"Serviço 7", bgColor:"#52a2a1"}]}
                    direction="row"
                    size={300}
                    rounded="0"
                    reOrganize={0}
            ></List>
            
        </div>
    )
}

export default Services;