import Countdown from "react-countdown";

/**
 * The Intro function returns a div with a class of intro, which contains a div with a class of
 * introBackground, which contains a div with a class of introText, which contains the Countdown
 * function
 * @returns A React component
 */
function Intro() {
    return (
        <>
            <div className="intro">
                <div className="introBackground">
                    <div className="introText">
                        <Countdown date={new Date(2022, 5, 24, 18, 0, 0, 0)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export { Intro }
