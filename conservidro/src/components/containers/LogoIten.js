
import styled from 'styled-components';

function LogoIten({src,text, imageSize, id, qtd, bgColor, direction, reOrganize, rounded, }){

    let mx = qtd>=3? 'mx-5' : '';

    function priorityLevel(){
        if(window.innerWidth > 1013 && direction == "row" && reOrganize == 1){
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
        background-color: ${bgColor};
    `;
    
    return(
        <>
        <Iten className={`h-full w-1/${qtd} ${mx} flex flex-col items-center justify-center`}>
            <ImageBackground className={`${rounded} flex items-center justify-center`}>
                {src}
            </ImageBackground>
            <h3 className="font-bold tracking-wider py-4 text-center">{text}</h3>
        </Iten>
        </>
    )
}

export default LogoIten;