import PropTypes from 'prop-types';
import LogoIten from './LogoIten';

function List({backgroundColor, src,size, title, direction, text, ImageAux, width, reOrganize, rounded}){
    var id = 0;

    function setCol(){
        let dr = direction == "col" ? "row" : "col";
        let wdt = direction == "col" ? "1/2" : "10/12";
        let items = direction == "col" ? "" : "center";
        let fontSize = direction == "col" ? "7xl" : "4xl";

        let object = {
            dr: dr,
            wdt : wdt,
            items : items,
            font : fontSize
        }

        return object;
    }

    return(
        <div className={`w-${width} flex flex-${setCol().dr} justify-around items-${setCol().items}`} style={{backgroundColor: backgroundColor}}>
            <div className="w-1/2">
                <h2 className={`text-${setCol().font} font-light my-8 text-center`}>{title}</h2>
                
                {text && 
                    <p className='text-center text-xl'>{text}</p>
                }
                {ImageAux &&
                    <img src={ImageAux} className='size-40'></img>
                }
            </div>
    
            <ul className={`w-${setCol().wdt} m-auto min-h-80 flex justify-center flex-wrap items-center flex-${direction}`}>
                {src.map((e)=>{
                    id++;
                    return(
                        <LogoIten src={e.src} text ={e.txt} imageSize = {size} id={id} qtd={src.length} bgColor={e.bgColor} 
                        direction={direction} reOrganize={reOrganize} rounded={rounded}></LogoIten>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default List;