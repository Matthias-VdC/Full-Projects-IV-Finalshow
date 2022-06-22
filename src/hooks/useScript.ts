import { useEffect } from "react";

/**
 * It creates a script tag, sets the src attribute to the url passed in, and appends the script tag to
 * the body of the document
 * @param {string} url - The URL of the script you want to load.
 */
const useScript = (url: string) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.setAttribute("type", "text/jsx");
        script.async = true;

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, [url]);
}

export { useScript };