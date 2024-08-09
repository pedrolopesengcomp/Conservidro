import PropTypes from 'prop-types';
import LogoIten from './LogoIten';
import Card from './Card';

function List({backgroundColor, src,size, title, direction, text, ImageAux, width, reOrganize, rounded, type}){
    var id = 0;

    function setCol(){
        let dr = direction == "col" ? "flex-row" : "flex-col";
        let wdt = direction == "col" ? "w-1/2" : "w-10/12";
        let items = direction == "col" ? "" : "items-center";
        let fontSize = direction == "col" ? "text-7xl" : "text-4xl";

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
                    <ul className={`${setCol().wdt} m-auto min-h-96 flex justify-center flex-wrap items-center flex-${direction}`}>
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
            
    
            <ul className={`${setCol().wdt} m-auto min-h-80 flex justify-center flex-wrap items-center flex-${direction}`}>
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
        <div className={`${width} flex ${setCol().dr} justify-around ${setCol().items}`} style={{backgroundColor: backgroundColor}}>
            <div className="w-1/2">
                <h2 className={`${setCol().font} font-light my-8 text-center`}>{title}</h2>
                
                {text && 
                    <p className='text-center text-xl'>{text}</p>
                }
                {ImageAux &&
                    <img src={ImageAux} className='size-40'></img>
                }
            </div>
            {verifyType()}
        </div>
    )
}

export default List;