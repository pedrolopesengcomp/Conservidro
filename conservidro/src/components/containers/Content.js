import styled from 'styled-components';

function Content({title, text, ImageSrc, Background, id, direction}){
    const Section = styled.section`
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
        <Section className="containerSection">
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