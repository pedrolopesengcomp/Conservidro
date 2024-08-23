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
            <div className="w-8/12 flex mx-auto justify-center flex-col">
                <h1 className="text-4xl md:text-6xl bold my-4 text-white tracking-wider text-wrap drop-shadow-md">
                    {title}
                </h1>
                <h2 className="text-xl md:text-2xl text-white drop-shadow-md">
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