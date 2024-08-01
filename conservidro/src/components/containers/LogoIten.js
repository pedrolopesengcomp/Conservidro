
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
        <Iten className="size-24">
            <ImageBackground className="size-24">
                <Image src={src} className="rounded-full"></Image>
            </ImageBackground>
            <h3 className="text-bold">{text}</h3>
        </Iten>
        </>
    )
}

export default LogoIten;