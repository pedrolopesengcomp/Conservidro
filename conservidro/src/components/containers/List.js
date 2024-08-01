import PropTypes from 'prop-types';
import LogoIten from './LogoIten';

function List({backgroundColor, src,size}){
    var id = 0;
    return(
        
        <ul className="w-full h-60 relative -top-4 flex" style={{backgroundColor: backgroundColor}}>
            {src.map((e)=>{
                id++;
                return(
                    <LogoIten src={e.src} text ={e.txt} imageSize = {size} id={id}></LogoIten>
                )
            })
            }
        </ul>
    )
}

export default List;