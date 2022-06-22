import { Television } from "../components/Television";

/**
 * The Index function returns a div with the class name "homepage" and a Television component
 * @returns A div with the className of "homepage" and a Television component.
 */
function Index() {
    return (
        <div className="homepage">
            <Television></Television>
        </div>
    );
}

export { Index }