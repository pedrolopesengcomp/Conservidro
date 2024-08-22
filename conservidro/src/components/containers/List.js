import PropTypes from 'prop-types';
import LogoIten from './LogoIten';
import Card from './Card';

import styled from 'styled-components';

function List({backgroundColor, src,size, title, direction, text, ImageAux, width, reOrganize, rounded, type, backgroundImage, color}){
    var id = 0;

    const Div = styled.div`
        background-color: ${backgroundColor};
        background-image: url('${backgroundImage}');
        background-position: center;
    `;

    function setCol(){
        let dr = direction == "col" ? "flex-row" : "flex-col";
        let wdt = direction == "col" ? "w-5/12" : "w-10/12";
        let items = direction == "col" ? "" : "items-center";
        let fontSize = direction == "col" ? "text-5xl" : "text-4xl";
        

        let object = {
            dr: dr,
            wdt : wdt,
            items : items,
            font : fontSize
        }

        return object;
    }

    function verifyType(){
        if(type == "card"){
            return(
                    <ul className={`${setCol().wdt} m-auto min-h-96 flex justify-center flex-wrap items-center flex-${direction} drop-shadow-md`}>
                    {src.map((e)=>{
                        id++;
                        return(
                            <Card bgColor={e.bgColor} src={e.src} imageSize={size} rounded={e.rounded} text={e.txt}></Card>
                        )
                    })
                    }
                </ul>
            )
        }
        else{
            return(
            
    
            <ul className={`${setCol().wdt} m-auto min-h-80 flex justify-center flex-wrap items-center flex-${direction} drop-shadow-md`}>
                {src.map((e)=>{
                    id++;
                    return(
                        <LogoIten src={e.src} text ={e.txt} imageSize = {size} id={id} qtd={src.length} bgColor={e.bgColor} 
                        direction={direction} reOrganize={reOrganize} rounded={rounded}></LogoIten>
                    )
                })
                }
            </ul>
            )
        }
    }




    return(
        <Div className={`w-full flex ${setCol().dr} justify-around ${setCol().items} text-${color} relative -top-16 rounded-3xl drop-shadow-lg py-16`}>
            
            <div className={`w-${width} grow`}>
                <h2 className={`${setCol().font} text-center grow`}>{title}</h2>
                
                {text && 
                    <p className='text-center text-xl drop-shadow-md'>{text}</p>
                }
                {ImageAux &&
                    <img src={ImageAux} className='size-40'></img>
                }
            </div>
            {verifyType()}
        </Div>
    )
}

export default List;