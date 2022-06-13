import { Logo } from "../Components/Logo";
import { Intro } from "../Components/Intro";

function Index() {
    return (
        <div className="homepage">
            <div className="homepageBackground">
                <div className="upperBackground">
                    <Logo />
                    <Intro />
                </div>
                <div className="lowerBackground"></div>
            </div>
        </div>
    );
}

export { Index };
