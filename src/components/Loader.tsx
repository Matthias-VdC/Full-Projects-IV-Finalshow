
/**
 * It returns a div with a class of loader, which contains a div with a class of wrapper, which
 * contains four divs with classes of ball and colors
 * @returns A div with a class of loader.
 */
function Loader() {
    return (
        <div className="wrapper">
            <div className="blue ball"></div>
            <div className="red ball"></div>
            <div className="yellow ball"></div>
            <div className="green ball"></div>
        </div>
    );
}
export default Loader;