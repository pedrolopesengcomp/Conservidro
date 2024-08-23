import styled from 'styled-components';

function Content({title, text, ImageSrc, Background, id, direction, list, highlight}){
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
        <Section className={`w-full min-h-${defineHeight()} flex justify-center items-center flex-col relative mb-16`}>
            <article className={`w-9/12 h-full flex flex-${direction} items-center `}>
                <header className="h-36 flex-none flex items-center">
                    <h3 className="text-4xl text-bold">{title}</h3>
                </header>
                <div className={`flex-none flex w-full items-center flex-wrap md:flex-nowrap pb-24 justify-around`}>
                    <p className=" text-center text-xl w-1/2">
                        {text && 
                        text.map((txt) => {
                            return (
                                <p className='pt-4'>{txt}</p>
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