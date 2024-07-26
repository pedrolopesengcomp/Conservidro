import PropTypes from 'prop-types';
import LogoIten from './LogoIten';
import Style from '../../style/List.css';

function List({backgroundColor, src,size}){
    var id = 0;
    return(
        
        <ul className="advantagesList" style={{backgroundColor: backgroundColor}}>
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