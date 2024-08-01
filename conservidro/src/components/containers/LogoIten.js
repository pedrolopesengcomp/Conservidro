
import styled from 'styled-components';

function LogoIten({src,text, imageSize, id, qtd }){

    function priorityLevel(){
        if(id%2==0){
            return 0;
        }
        else{
            return 50;
        }
    }

    const Iten = styled.div`
        padding-top:${priorityLevel}px;
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
        <Iten className={`h-full w-1/${qtd} grow flex flex-col items-center justify-center`}>
            <ImageBackground className="size-24 bg-black rounded-full">
                <Image src={src} className=""></Image>
            </ImageBackground>
            <h3 className="text-bold">{text}</h3>
        </Iten>
        </>
    )
}

export default LogoIten;