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
        <CardIten className="flex items-center justify-center flex-col mx-8 my-8 h-96 w-80 rounded shadow-md hover:shadow-lg transition-all">
            <ImageBackground className={`${rounded} flex items-center justify-center my-4`}>
                {src}
            </ImageBackground>
            <h3>{text}</h3>
        </CardIten>
    )

}

export default Card;