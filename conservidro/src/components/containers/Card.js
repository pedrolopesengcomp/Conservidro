import styled from 'styled-components';

function Card({src,text, imageSize, bgColor, rounded}){

    const ImageBackground = styled.div`
        width:${imageSize + 50}px;
        height:${imageSize + 50}px;
    `;

    const CardIten = styled.li`
        background-color: ${bgColor};
    `

    return(
        <CardIten className="flex items-center justify-center flex-col mx-16 my-8 h-96 w-80 rounded shadow-md hover:shadow-lg transition-all">
            <ImageBackground className={`${rounded} flex items-center justify-center my-4`}>
                {src}
            </ImageBackground>
            <h3 className="text-md bold my-4 text-white tracking-wider text-wrap drop-shadow-md">{text}</h3>
        </CardIten>
    )

}

export default Card;