import PropTypes from 'prop-types';
import LogoIten from './LogoIten';

function List({backgroundColor, src,size}){
    var id = 0;
    return(
        <div className="w-full" style={{backgroundColor: backgroundColor}}>
            <ul className="w-10/12 m-auto min-h-80 flex justify-center flex-wrap items-center">
                {src.map((e)=>{
                    id++;
                    return(
                        <LogoIten src={e.src} text ={e.txt} imageSize = {size} id={id} qtd={src.size}></LogoIten>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default List;