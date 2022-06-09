import { Logo } from "../components/Logo";
import { Intro } from "../components/Intro";

function Index(){
    return(
        <div className="homepage">
            <div className="homepageBackground">
                <div className="upperBackground">
                    <Intro />
                </div>
                <div className="lowerBackground"></div>
            </div>
            
        </div>
    );
}

export {Index}