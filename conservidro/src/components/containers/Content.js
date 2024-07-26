import styled from 'styled-components';

import Style from '../../style/Content.css';

function Content({title, text, ImageSrc, Background, id}){
    const Section = styled.section`
        width:100vw;
        min-height: 200px;

        display: flex;
        align-items: center;
        justify-content: center;

        margin-top:50px;

        ${verifyBackground()}
    `

    function verifyBackground(){
        console.log(typeof(Background));
        if(typeof(Background) == 'string'){
            return `background-color: ${Background};`
        }
        else{
            return `background-image: ${Background};;`
        }
    }

    return(
        <Section>
            <article className="contentArticle">
                <header>
                    <h3 className="contentTitle">{title}</h3>
                </header>
                <div className="contentContent">
                    <p className="contentText">
                        {text}
                    </p>

                    {ImageSrc && 
                        <img src={ImageSrc} className="contentImage"></img>
                    }

                </div>
            </article>
        </Section>
    )
}

export default Content;