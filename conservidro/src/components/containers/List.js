import PropTypes from 'prop-types';
import LogoIten from './LogoIten';

function List({backgroundColor, src,size, title, direction}){
    var id = 0;

    function invertDirection(){
        return direction == "col" ? "row" : "col";
    }

    function setWidth(){
        return direction == "col" ? "1/2" : "10/12"
    }

    return(
        <div className={`w-full flex flex-${invertDirection()} items-center justify-around`} style={{backgroundColor: backgroundColor}}>
            <h2 className='text-4xl font-light my-8'>{title}</h2>
            <ul className={`w-${setWidth()} m-auto min-h-80 flex justify-center flex-wrap items-center flex-${direction}`}>
                {src.map((e)=>{
                    id++;
                    return(
                        <LogoIten src={e.src} text ={e.txt} imageSize = {size} id={id} qtd={src.size} bgColor={e.bgColor}></LogoIten>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default List;