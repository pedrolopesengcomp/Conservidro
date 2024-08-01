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
        <Section className="w-full h-96 flex justify-center items-center flex-col">
            <article className="w-full h-full flex flex-col items-center">
                <header className="h-36 flex-none flex items-center justify-center">
                    <h3 className="text-4xl text-bold">{title}</h3>
                </header>
                <div className="grow flex w-full items-center">
                    <p className="min-w-2/3 grow text-center">
                        {text}
                    </p>

                    {ImageSrc && 
                        <img src={ImageSrc} className="w-1/3 flex-none"></img>
                    }

                </div>
            </article>
        </Section>
    )
}

export default Content;