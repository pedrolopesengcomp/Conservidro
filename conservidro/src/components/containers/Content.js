import styled from 'styled-components';

function Content({title, text, ImageSrc, Background, id, direction}){
    function defineHeight(){
        if((ImageSrc == undefined)){
            return 64;
        }
        else{
            return 96;
        }
    }

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
        <Section className={`w-full h-${defineHeight()} flex justify-center items-center flex-col`}>
            <article className={`w-9/12 h-full flex flex-${direction} items-center `}>
                <header className="h-36 flex-none flex items-center">
                    <h3 className="text-4xl text-bold">{title}</h3>
                </header>
                <div className={`flex-none flex w-full items-center flex-wrap`}>
                    <p className="grow text-center">
                        {text}
                    </p>

                    {ImageSrc &&
                            <img className="shrink w-96"src={ImageSrc} ></img>
                    }

                </div>
            </article>
        </Section>
    )
}

export default Content;