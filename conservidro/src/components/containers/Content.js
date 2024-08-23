import styled from 'styled-components';

function Content({title, text, ImageSrc, Background, id, direction, list, highlight, subtitle}){
    let height = 0;
    function defineHeight(){
        if((ImageSrc == undefined)){
            height = "48";
        }
        else{
            height = "64";
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
        <Section className={`w-full md:h-${height} flex justify-center items-center flex-col relative `}>
            <article className={`w-9/12 h-full flex flex-${direction} items-center `}>
                <header className="h-36 flex-none flex items-center">
                    <h3 className="text-center md:text-left text-3xl md:text-4xl text-bold">{title}</h3>
                    <h2 className='text-3xl text-bold text-center'>{subtitle}</h2>
                </header>
                <div className={`flex-none flex w-full items-center flex-wrap md:flex-nowrap pb-24 justify-around`}>
                    <p className=" text-xl w-full md:w-1/2">
                        {text && 
                        text.map((txt) => {
                            return (
                                <p className='pt-4 text-justify'>{txt}</p>
                            )
                        })}
                        {list && 
                        list.map((e)=>{
                            return(
                                <li className='my-4 text-left'>{e}</li>
                            )
                            })
                        }

                        {highlight && 
                            <div className={`p-8 drop-shadow-md bg-yellow-400 w-48 my-4 rounded mx-auto`}>
                                <p>{highlight}</p>
                            </div>
                        }
                    </p>

                    {ImageSrc &&
                            <img className="shrink w-96 w-1/2"src={ImageSrc} ></img>
                    }

                    

                </div>
            </article>
        </Section>
    )
}

export default Content;