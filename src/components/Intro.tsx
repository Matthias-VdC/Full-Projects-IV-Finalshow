import Countdown from "react-countdown";

function Intro(){
    return(
        <>
            <div className="intro">
                <div className="introBackground">
                    <div className="introText">
                        {/* <p>Welkom bij Multimedia & Creatieve Technologieën van de Erashmushogeschool Brussel!</p>
                        <p>Klaar om onze richting te ontdekken?</p>

                        <input type="text" placeholder="Your name"/>
                        <button>Let's go!</button> */}
                    <Countdown date={new Date(2022,5,24,18,0,0,0)}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export {Intro}