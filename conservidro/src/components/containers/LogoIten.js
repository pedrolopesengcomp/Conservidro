import Style from '../../style/LogoIten.css';
import styled from 'styled-components';

function LogoIten({src,text, imageSize, id}){

    function priorityLevel(){
        if(id%2==0){
            return 0;
        }
        else{
            return 100;
        }
    }

    const Iten = styled.div`
        margin-top:${priorityLevel}px;
    `;

    const Image = styled.image`
        width: ${imageSize}px;
        height: ${imageSize}px;
    `;

    const ImageBackground = styled.div`
        width:${imageSize + 50}px;
        height:${imageSize + 50}px;
    `;

    return(
        <>
        <Iten className="LogoIten">
            <ImageBackground className="logoImageBackground">
                <Image src={src} className="logoImage"></Image>
            </ImageBackground>
            <h3 className="logoText">{text}</h3>
        </Iten>
        </>
    )
}

export default LogoIten;