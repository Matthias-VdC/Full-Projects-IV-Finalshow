import { Logo } from "../components/Logo";
import { Intro } from "../components/Intro";
import { Television } from "../components/Television";

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
            <Television></Television>
        </div>
    );
}

export { Index };
