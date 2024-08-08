import PropTypes from 'prop-types';
import styled from 'styled-components';

import {useState} from 'react';

function Principal({title, subtitle, text, background, size}){
    var $principalContainer = document.getElementsByClassName("principalContainer");

    const[height, setHeight] = new useState();

    const Section = styled.section`
    background-image: url('${background}');
`;

    return(
        
        <Section className={`w-full ${size} flex`} id="principalContainer">
            <div className="w-9/12 m-auto flex items-start justify-center flex-col">
                <h1 className="text-6xl bold text-white tracking-wider">
                    {title}
                </h1>
                <h2 className="text-xl text-white">
                    {subtitle}
                </h2>
            </div>
            {text && (
                <p className="principalText">{text}</p>
            )}
        </Section>
    )
}

Principal.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    text: PropTypes.string,
    background: PropTypes.string
}

export default Principal;