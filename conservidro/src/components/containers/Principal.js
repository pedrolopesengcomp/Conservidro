import PropTypes from 'prop-types';
import styled from 'styled-components';
import Style from '../../style/principalContainer.css'

function Principal({title, subtitle, text, background}){
    var $principalContainer = document.getElementsByClassName("principalContainer");

    const Section = styled.section`
    background-image: url('${background}');
`;

    window.addEventListener("scroll", ()=>{
        var value = `${window.scrollY * -0.25}px bottom`;
        $principalContainer[0].style.backgroundPosition = value;
        console.log($principalContainer[0].style);
    })

    return(
        <Section className="principalContainer" id="principalContainer">
            <div className="pageTitles">
                <h1 className="principalTitle">
                    {title}
                </h1>
                <h2 className="principalSubtitle">
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