
import styled from 'styled-components';

function LogoIten({src,text, imageSize, id, qtd, bgColor}){

    function priorityLevel(){
        if(window.innerWidth > 1013){
            if(id%2==0){
                return 0;
            }
            else{
                return 50;
            }
        }
        else{
            return 50;
        }
    }

    const Iten = styled.div`
        
        padding-top:${priorityLevel}px;
        padding-bottom:50px;
        
    `;

    const Image = styled.image`
        width: ${imageSize}px;
        height: ${imageSize}px;
    `;

    const ImageBackground = styled.div`
        width:${imageSize + 50}px;
        height:${imageSize + 50}px;
    `;

    function teste(){
        console.log(src);
        return <src></src>;
    }

    return(
        <>
        <Iten className={`h-full w-1/${qtd} grow flex flex-col items-center justify-center`}>
            <ImageBackground className={`rounded-full flex items-center justify-center my-4`} style={{backgroundColor: bgColor}}>
                {src}
            </ImageBackground>
            <h3 className="bold">{text}</h3>
        </Iten>
        </>
    )
}

export default LogoIten;